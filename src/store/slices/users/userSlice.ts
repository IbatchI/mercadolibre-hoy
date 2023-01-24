import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getLocalStorage, setLocalStorage } from '../../../../utils/utilsFunctions'
import { IUser } from '../../../types/types'

// Type of the slice state
interface UserState extends IUser {
  error: string
  isAuth: boolean
  loading: boolean
  accesToken: string
}

const initialState = {
  accesToken: getLocalStorage('accessToken') ?? '',
  email: getLocalStorage('email') ?? '',
  error: '',
  isAuth: !!getLocalStorage('accessToken'),
  loading: false,
  name: getLocalStorage('name') ?? '',
  uid: getLocalStorage('uid') ?? '',
} as UserState

// Payloads types
interface SetUserPayload extends IUser {
  accesToken: string
}

export const userSlice = createSlice({
  name: 'searches',
  initialState,
  reducers: {
    startLoadingUser: (state) => {
      // setLoading(true)
      state.loading = true
    },
    setUserData: (state, action: PayloadAction<SetUserPayload>) => {
      state.accesToken = action.payload.accesToken
      state.email = action.payload.email
      state.name = action.payload.name
      state.uid = action.payload.uid
      state.isAuth = !!action.payload.accesToken.length
    },
    setUserLocalStorage: (_state, action: PayloadAction<SetUserPayload>) => {
      setLocalStorage('accessToken', action.payload.accesToken)
      setLocalStorage('email', action.payload.email)
      setLocalStorage('name', action.payload.name)
      setLocalStorage('uid', action.payload.uid || '')
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    endLoadingUser: (state) => {
      state.loading = false
    },
  },
})

// Actions
export const { startLoadingUser, setUserData, endLoadingUser, setUserLocalStorage, setError } =
  userSlice.actions
