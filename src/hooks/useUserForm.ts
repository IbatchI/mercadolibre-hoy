import { useFormik } from 'formik'
import * as yup from 'yup'
import { IUser, UserFormTypes } from '../types/types'
import { useAppDispatch } from '../store/hooks'
import { loginThunk, registerThunk } from '../store/slices/users/userThunks'
import { useNavigate } from 'react-router-dom'

const initialValues = {
  name: '',
  email: '',
  password: '',
}

const validatationSchema = yup.object({
  email: yup.string().email('Email inválido').required('El Email es requerido'),
  password: yup
    .string()
    .min(6)
    .typeError('La contraseña debe ser de 6 caracteres')
    .required('La contraseña es requerida'),
})

export const useUserForm = (type: UserFormTypes) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleOnSubmit = async (userData: IUser) => {
    if (type === 'login') {
      dispatch(loginThunk(userData))
      navigate('/')
    }
    if (type === 'register') {
      dispatch(registerThunk(userData))
      navigate('/')
    }
  }

  const formik = useFormik({
    initialValues,
    onSubmit: handleOnSubmit,
    validationSchema: validatationSchema,
  })

  const fieldEmpty = formik.values.email === '' || formik.values.password === ''

  return {
    disabledSubmit: !!(formik.errors.email || formik.errors.password || fieldEmpty),
    emailError: formik.touched.email && formik.errors.email ? formik.errors.email : '',
    formik,
    handleOnBlur: formik.handleBlur,
    handleOnChange: formik.handleChange,
    handleOnSubmit: formik.handleSubmit,
    nameError: formik.errors.name ? formik.errors.name : '',
    passwordError: formik.touched.password && formik.errors.password ? formik.errors.password : '',
    values: formik.values,
  }
}
