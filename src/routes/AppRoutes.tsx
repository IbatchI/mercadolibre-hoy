import { Route, Routes } from 'react-router-dom'

import { Navbar } from '../components/UI/molecules/NavBar/NavBar'
import { AuthProtection } from './AuthProtection'
import { Register, SearchResults, Home } from '../pages'
import { StyledGlobalContainer } from '../../utils/styledGlobal'
import { BottomMenu } from '../components/UI/molecules/BottomMenu/BottomMenu'
import { MySearches } from '../pages/MySearches'
import { useAppSelector } from '../store/hooks'

export const AppRoutes = () => {
  const { isAuth } = useAppSelector((state) => state.user)

  return (
    <>
      <Navbar />
      <StyledGlobalContainer>
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth} />} />
          <Route
            path="/search/:keyword"
            element={
              <AuthProtection isAuth={isAuth}>
                <SearchResults />
              </AuthProtection>
            }
          />
          <Route path={'/register'} element={<Register />} />
          <Route
            path={'/my-searches'}
            element={
              <AuthProtection isAuth={isAuth}>
                <MySearches />
              </AuthProtection>
            }
          />
        </Routes>
      </StyledGlobalContainer>
      {isAuth && <BottomMenu />}
    </>
  )
}
