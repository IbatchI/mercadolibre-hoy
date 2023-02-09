import { Dispatch } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { login, register } from '../../../services/api-ml-hoy/User'
import { IUser } from '../../../types/types'
import {
  endLoadingUser,
  setError,
  setUserData,
  setUserLocalStorage,
  startLoadingUser,
} from './userSlice'

export const loginThunk = (userData: IUser) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(startLoadingUser())
      const { user, token } = await login({
        email: userData.email,
        password: userData.password || '',
      })
      dispatch(setUserData({ ...user, accesToken: token }))
      dispatch(setUserLocalStorage({ ...user, accesToken: token }))
    } catch (error) {
      if (error instanceof AxiosError && error.request.status === 400) {
        dispatch(setError(error.response?.data?.msg))
      }
    } finally {
      dispatch(endLoadingUser())
    }
  }
}

export const registerThunk = (userData: IUser) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(startLoadingUser())
      await register(userData)
    } catch (error) {
      if (error instanceof AxiosError && error.request.status === 400) {
        dispatch(setError(error.response?.data?.msg))
      }
    } finally {
      dispatch(endLoadingUser())
    }
  }
}

export const logoutThunk = () => {
  return async (dispatch: Dispatch) => {
    try {
      localStorage.clear()
      dispatch(startLoadingUser())
      dispatch(setUserData({ name: '', email: '', password: '', accesToken: '' }))
    } finally {
      dispatch(endLoadingUser())
    }
  }
}
