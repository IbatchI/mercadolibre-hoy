import { API_ML_HOY } from './Settings'
import { IUser } from '../../types/types'

export const register = async (data: IUser) => {
  const response = await API_ML_HOY.post(`/users`, data)
  return response.data
}

interface ILogin {
  email: string
  password: string
}
export const login = async (data: ILogin) => {
  const response = await API_ML_HOY.post(`/auth/login`, data)
  return response.data
}
