import axios from 'axios'

import { BASE_URL_ML_HOY } from './Settings'
import { IUser } from '../../types/types'

export const register = async (data: IUser) => {
  const response = await axios.post(`${BASE_URL_ML_HOY}/users`, data)
  return response.data
}

export const login = async (data: IUser) => {
  const response = await axios.post(`${BASE_URL_ML_HOY}/auth/login`, data)
  return response.data
}
