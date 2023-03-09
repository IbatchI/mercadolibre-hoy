import { useFormik } from 'formik'
import { useState } from 'react'
import * as yup from 'yup'
import { updateSearchWithFiltersQuery } from '../services/api-ml-hoy/Searches'
import { useAppSelector } from '../store/hooks'

import { ISearchWithFilters } from '../types/types'

const validatationSchema = yup.object({
  keyword: yup.string().required('El nombre de la busqueda es requerido'),
  minPrice: yup.number().min(0, 'El precio mínimo no puede ser negativo'),
  maxPrice: yup.number().min(0, 'El precio máximo no puede ser negativo'),
  alreadySeen: yup.boolean(),
})

export const useSearchDetailForm = () => {
  const [loading, setLoading] = useState(false)
  const { searchById } = useAppSelector((state) => state.searches)

  const handleOnSubmit = async ({
    keyword,
    alreadySeen,
    maxPrice,
    minPrice,
  }: ISearchWithFilters) => {
    try {
      setLoading(true)
      await updateSearchWithFiltersQuery(searchById?.uid || '', {
        keyword,
        filters: {
          alreadySeen,
          maxPrice,
          minPrice,
          uid: searchById?.filters.uid,
        },
      })
    } finally {
      setLoading(false)
    }
  }

  const initialValues: ISearchWithFilters = {
    alreadySeen: searchById?.filters?.alreadySeen || false,
    keyword: searchById?.keyword || '',
    maxPrice: searchById?.filters?.maxPrice,
    minPrice: searchById?.filters?.minPrice,
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
      formik.errors.alreadySeen
    ),
    formik,
    handleOnBlur: formik.handleBlur,
    handleOnChange: formik.handleChange,
    handleOnSubmit: formik.handleSubmit,
    keywordError: formik.errors.keyword ? formik.errors.keyword : '',
    loading,
    maxPriceError: formik.touched.maxPrice && formik.errors.maxPrice ? formik.errors.maxPrice : '',
    minPriceError: formik.touched.minPrice && formik.errors.minPrice ? formik.errors.minPrice : '',
    values: formik.values,
  }
}
