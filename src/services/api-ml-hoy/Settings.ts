import axios from 'axios'
import { toast } from 'react-toastify'

// export const BASE_URL_ML_HOY = 'https://api-ml-hoy.onrender.com/api/users'
export const BASE_URL_ML_HOY = import.meta.env.VITE_REACT_BASE_URL_ML_HOY

export const API_ML_HOY = axios.create({
  baseURL: BASE_URL_ML_HOY,
  headers: {
    'Content-Type': 'application/json',
  },
})

// set request interceptor
API_ML_HOY.interceptors.request.use(
  (config) => {
    // Siempre va a tener headers porque lo inicializamos asi en la linea 7
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    config.headers!['x-token'] = localStorage.getItem('accessToken') || ''
    return config
  },
  (error) => {
    // do something with request error
    return Promise.reject(error)
  }
)

// set response interceptor
API_ML_HOY.interceptors.response.use(
  (response) => {
    // do something with response data
    return response
  },
  (error) => {
    // When we have a 404 page, we can redirect to it
    // if (error.response.status === 404) {
    //   window.location.href = '/404'
    // }
    if (error.response.status === 401) toast.error('Token no válido')
    if (error.response.status === 403) toast.error('No tienes permisos')
    if (error.response.status === 404) toast.error('No se encontró el recurso')
    if (error.response.status === 500) toast.error('Error del servidor')

    // if it's a 400 error, we can show the error message
    if (error.response.status === 400) {
      const errorMessage = error.response.data.msg
      toast.error(errorMessage)
    }
    return Promise.reject(error)
  }
)
