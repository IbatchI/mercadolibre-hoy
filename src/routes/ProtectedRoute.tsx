import { Route } from 'react-router-dom'

interface IProtectedRouteProps {
  element: React.ReactNode
  path: string
}

export const ProtectedRoute = ({ element, path }: IProtectedRouteProps) => {
  return <Route path={path} element={element} />
}
