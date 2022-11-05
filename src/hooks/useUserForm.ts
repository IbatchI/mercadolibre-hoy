import { useContext, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { AxiosError } from 'axios'

import { AuthContext } from '../context/AuthProvider'
import { IUser, UserFormTypes } from '../types/types'
import { login, register } from '../services/api-ml-hoy/User'
import { toast } from 'react-toastify'

const initialValues = {
  name: '',
  email: '',
  password: '',
}

const validatationSchema = yup.object({
  email: yup.string().email('Invalid email address').required('Required'),
  password: yup.string().min(6).required('Required'),
})

export const useUserForm = (type: UserFormTypes) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [responseError, setResponseError] = useState<string | undefined>()
  const { handleOnLogin } = useContext(AuthContext)

  const handleOnSubmit = async (userData: IUser) => {
    if (type === 'login') {
      try {
        setIsLoading(true)
        const response = await login(userData)
        const { user, token } = response
        handleOnLogin(
          {
            email: user.email,
            name: user.name,
            uid: user.uid,
          },
          token
        )
        toast.success(response.msg)
        setIsLoading(false)
      } catch (error) {
        if (error instanceof AxiosError && error.request.status === 400) {
          setResponseError(error.response?.data?.msg)
        }
        setIsLoading(false)
      }
    }

    if (type === 'register') {
      try {
        setIsLoading(true)
        const response = await register(userData)
        toast.success(response.msg)
        setIsLoading(false)
      } catch (error) {
        if (error instanceof AxiosError && error.request.status === 400) {
          setResponseError(error.response?.data?.msg)
        }
        setIsLoading(false)
      }
    }
  }

  const formik = useFormik({
    initialValues,
    onSubmit: handleOnSubmit,
    validationSchema: validatationSchema,
  })

  const fieldEmpty = formik.values.email === '' || formik.values.password === ''

  return {
    disabledSubmit: !!(formik.errors.email || formik.errors.password || fieldEmpty || isLoading),
    emailError: formik.touched.email && formik.errors.email ? formik.errors.email : '',
    formik,
    handleOnChange: formik.handleChange,
    handleOnSubmit: formik.handleSubmit,
    isLoading,
    nameError: formik.touched.name && formik.errors.name ? formik.errors.name : '',
    passwordError: formik.touched.password && formik.errors.password ? formik.errors.password : '',
    responseError: responseError,
    values: formik.values,
  }
}
