import { Navigate, Route, Routes } from 'react-router-dom'

import { AuthProtection } from './AuthProtection'
import { BottomMenu } from '../components/UI/molecules/BottomMenu/BottomMenu'
import { Navbar } from '../components/UI/molecules/NavBar/NavBar'
import { routes } from './Routes'
import { StyledGlobalContainer } from '../../utils/styledGlobal'
import { useAppSelector } from '../store/hooks'

export const AppRoutes = () => {
  const { isAuth } = useAppSelector((state) => state.user)

  return (
    <>
      <Navbar />
      <StyledGlobalContainer>
        <Routes>
          {routes.map(({ path, needAuth, Component }) => (
            <Route
              element={needAuth ? <AuthProtection>{<Component />}</AuthProtection> : <Component />}
              key={path}
              path={path}
            />
          ))}
          {/* Ruta predeterminada en caso de que no se encuentre ninguna ruta */}
          <Route element={<Navigate replace to={'/'} />} path="/*" />
        </Routes>
      </StyledGlobalContainer>
      {isAuth && <BottomMenu />}
    </>
  )
}
