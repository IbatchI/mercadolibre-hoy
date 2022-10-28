import { Navigate } from 'react-router-dom'

interface IAuthProtectionProps {
  children: React.ReactNode
  isAuth: boolean
}

export const AuthProtection = ({ children, isAuth }: IAuthProtectionProps) =>
  !isAuth ? <Navigate to="/" replace /> : <>{children}</>
