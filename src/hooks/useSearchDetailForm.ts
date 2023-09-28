import { useEffect } from 'react'
import { AnyAction } from '@reduxjs/toolkit'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { createFilterThunk } from '../store/slices/filters/filtersThunks'
import { ISearchWithFilters } from '../types/types'
import { getSearchesThunk, updateSearchThunk } from '../store/slices/searches/searchesThunks'
import { useAppDispatch, useAppSelector } from '../store/hooks'

const validatationSchema = yup.object({
  keyword: yup.string().required('El nombre de la busqueda es requerido'),
  minPrice: yup.number().min(0, 'El precio mínimo no puede ser negativo'),
  maxPrice: yup.number().min(0, 'El precio máximo no puede ser negativo'),
})

export const useSearchDetailForm = ({ searchId }: { searchId: string }) => {
  const dispatch = useAppDispatch()
  const { searchResults, loading } = useAppSelector((state) => state.searches)
  const search = searchResults.find((search) => search.uid === searchId)
  const { filters } = search || {}

  const handleOnSubmit = async ({ keyword, minPrice, maxPrice }: ISearchWithFilters) => {
    try {
      if (filters) {
        await dispatch(
          updateSearchThunk({
            searchId,
            keyword,
            filters: {
              minPrice,
              maxPrice,
              uid: filters?.uid,
            },
          })
        )
      } else {
        await dispatch(
          createFilterThunk({
            keyword,
            searchId,
            minPrice,
            maxPrice,
          })
        )
      }
    } finally {
    }
  }

  const initialValues: ISearchWithFilters = {
    keyword: search?.keyword || '',
    maxPrice: filters?.maxPrice,
    minPrice: filters?.minPrice,
  }

  const formik = useFormik({
    initialValues,
    onSubmit: handleOnSubmit,
    validationSchema: validatationSchema,
  })

  // Si se recarga la pagina vamos a perder la data del store
  // por lo que vamos a tener que hacer el fetch de la data de nuevo
  // y cuando termine tenemos que setear los valores del formik
  useEffect(() => {
    if (!search) {
      dispatch(getSearchesThunk() as unknown as AnyAction)
    }

    if (!filters || formik.values.keyword || !search?.keyword) {
      return
    }

    formik.values.keyword = search?.keyword || ''
    formik.values.minPrice = filters?.minPrice
    formik.values.maxPrice = filters?.maxPrice
  }, [dispatch, search])

  return {
    disabledSubmit: !!(formik.errors.keyword || formik.errors.minPrice || formik.errors.maxPrice),
    formik,
    handleOnBlur: formik.handleBlur,
    handleOnChange: formik.handleChange,
    handleOnSubmit: formik.handleSubmit,
    keywordError: formik.errors.keyword ? formik.errors.keyword : '',
    maxPriceError: formik.touched.maxPrice && formik.errors.maxPrice ? formik.errors.maxPrice : '',
    minPriceError: formik.touched.minPrice && formik.errors.minPrice ? formik.errors.minPrice : '',
    loading,
    values: formik.values,
  }
}
