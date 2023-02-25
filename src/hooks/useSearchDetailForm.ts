import { useFormik } from 'formik'
import * as yup from 'yup'

import { ISearchWithFilters } from '../types/types'

const validatationSchema = yup.object({
  keyword: yup.string().required('El nombre de la busqueda es requerido'),
  minPrice: yup.number().min(0, 'El precio mínimo no puede ser negativo'),
  maxPrice: yup.number().min(0, 'El precio máximo no puede ser negativo'),
  markAsViewed: yup.boolean(),
})

export const useSearchDetailForm = ({
  keyword = '',
  minPrice = 0,
  maxPrice = '',
  markAsViewed = false,
}) => {
  const handleOnSubmit = async ({
    keyword,
    markAsViewed,
    maxPrice,
    minPrice,
  }: ISearchWithFilters) => {
    console.log('values', markAsViewed, maxPrice, minPrice, keyword)
  }

  const initialValues = { keyword, minPrice, maxPrice, markAsViewed }

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
      formik.errors.markAsViewed
    ),
    keywordError: formik.errors.keyword ? formik.errors.keyword : '',
    formik,
    handleOnBlur: formik.handleBlur,
    handleOnChange: formik.handleChange,
    handleOnSubmit: formik.handleSubmit,
    minPriceError: formik.touched.minPrice && formik.errors.minPrice ? formik.errors.minPrice : '',
    maxPriceError: formik.touched.maxPrice && formik.errors.maxPrice ? formik.errors.maxPrice : '',
    values: formik.values,
  }
}
