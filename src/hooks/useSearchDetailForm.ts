import { useFormik } from 'formik'
// import { useEffect } from 'react'
import * as yup from 'yup'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { createFilterThunk } from '../store/slices/filters/filtersThunks'
// import { getFiltersBySearchThunk, createFilterThunk } from '../store/slices/filters/filtersThunks';
import { updateSearchThunk } from '../store/slices/searches/searchesThunks'

import { ISearchWithFilters } from '../types/types'

const validatationSchema = yup.object({
  keyword: yup.string().required('El nombre de la busqueda es requerido'),
  minPrice: yup.number().min(0, 'El precio mínimo no puede ser negativo'),
  maxPrice: yup.number().min(0, 'El precio máximo no puede ser negativo'),
  allreadySeen: yup.boolean(),
})

export const useSearchDetailForm = ({ searchId }: { searchId: string }) => {
  const dispatch = useAppDispatch()
  const { searchResults, loading } = useAppSelector((state) => state.searches)
  // const { filters: filtersFetch } = useAppSelector((state) => state.filters)
  const search = searchResults.find((search) => search.uid === searchId)
  const { filters } = search || {}

  const handleOnSubmit = async ({
    keyword,
    minPrice,
    maxPrice,
    allreadySeen,
  }: ISearchWithFilters) => {
    try {
      if (filters) {
        await dispatch(
          updateSearchThunk({
            searchId,
            keyword,
            filters: {
              minPrice,
              maxPrice,
              allreadySeen,
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
            allreadySeen,
          })
        )
      }
    } finally {
    }
  }

  const initialValues: ISearchWithFilters = {
    allreadySeen: filters?.allreadySeen ?? false,
    keyword: search?.keyword ?? '',
    maxPrice: filters?.maxPrice,
    minPrice: filters?.minPrice,
  }

  const formik = useFormik({
    initialValues,
    onSubmit: handleOnSubmit,
    validationSchema: validatationSchema,
  })

  return {
    disabledSubmit: !!(
      formik.errors.keyword ||
      formik.errors.minPrice ||
      formik.errors.maxPrice ||
      formik.errors.allreadySeen
    ),
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
