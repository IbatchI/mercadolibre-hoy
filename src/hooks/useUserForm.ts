import { useContext, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { IUser, UserFormTypes } from '../types/types'
import { login, register } from '../services/api-ml-hoy/User'
import { AuthContext } from '../context/AuthProvider'

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
  const { handleOnLogin } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)

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
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }

    if (type === 'register') {
      try {
        setIsLoading(true)
        const response = await register(userData)
        setIsLoading(false)
      } catch (error) {
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
    values: formik.values,
  }
}
