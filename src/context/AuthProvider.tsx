import { createContext, useEffect, useState } from 'react'

import { getLocalStorage, setLocalStorage } from '../../utils/utilsFunctions'
import { UserInfo } from '../types/types'

interface IAuthContextProps {
  children: React.ReactNode
}

interface IAuthContext {
  handleOnLogOut(): void
  // eslint-disable-next-line no-unused-vars
  handleOnLogin(arg0: UserInfo, arg1: string): void
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
  const [isAuth, setIsAuth] = useState<boolean>(false)

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
  }

  // Si recargamos la pagina se perderia el valor de isAuth
  // de esta forma nos aseguramos que si hay accessToken se mantenga en el context
  useEffect(() => {
    if (getLocalStorage('accessToken')) {
      setIsAuth(true)
    }
  }, [isAuth])

  return (
    <AuthContext.Provider value={{ handleOnLogOut, handleOnLogin, isAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
