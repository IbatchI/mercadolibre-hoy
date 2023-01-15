import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getLocalStorage, setLocalStorage } from '../../utils/utilsFunctions'
import { UserInfo } from '../types/types'

interface IAuthContextProps {
  children: React.ReactNode
}

interface IAuthContext {
  handleOnLogOut(): void
  // eslint-disable-next-line no-unused-vars
  handleOnLogin(userInfo: UserInfo, tokenJWT: string): void
  isAuth: boolean
}

const defaultAuthContext = {
  handleOnLogOut: () => {
    /*empty*/
  },
  handleOnLogin: () => {
    /*empty*/
  },
  isAuth: false,
}

export const AuthContext = createContext<IAuthContext>(defaultAuthContext)

export const AuthProvider = ({ children }: IAuthContextProps) => {
  // Solo va a consultar al localStorage la primera vez
  // o en caso que recarguemos la pagina
  const [isAuth, setIsAuth] = useState<boolean>(!!getLocalStorage('accessToken'))
  const navigate = useNavigate()

  const handleOnLogin = (userInfoParam: UserInfo, tokenJWT: string) => {
    setIsAuth(true)
    setLocalStorage('accessToken', tokenJWT)
    setLocalStorage('email', userInfoParam.email)
    setLocalStorage('name', userInfoParam.name)
    setLocalStorage('uid', userInfoParam.uid || '')
  }

  const handleOnLogOut = () => {
    setIsAuth(false)
    localStorage.clear()
    navigate('/')
  }

  return (
    <AuthContext.Provider value={{ handleOnLogOut, handleOnLogin, isAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
