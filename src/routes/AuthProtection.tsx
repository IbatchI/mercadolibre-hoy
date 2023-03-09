import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'

interface IAuthProtectionProps {
  children: React.ReactNode
}

export const AuthProtection = ({ children }: IAuthProtectionProps) => {
  const { isAuth } = useAppSelector((state) => state.user)
  return (
    <>
      {isAuth ? (
        children
      ) : (
        <Navigate
          replace
          to={{
            pathname: '/',
          }}
        />
      )}
    </>
  )
}
