import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AuthContext } from '../context/AuthProvider'
import { Navbar } from '../components/UI/molecules/NavBar/NavBar'
import { AuthProtection } from './AuthProtection'
import { Register, SearchResults, Home } from '../pages'
import { StyledGlobalContainer } from '../../utils/styledGlobal'
import { Loader } from '../components/UI/atoms/Loader/Loader'
import { useLoading } from '../context/LoadingProvider'
import { BottomMenu } from '../components/UI/molecules/BottomMenu/BottomMenu'
import { MySearches } from '../pages/MySearches'

export const AppRoutes = () => {
  const { isAuth } = useContext(AuthContext)
  const { loading } = useLoading()

  return (
    <>
      {loading && <Loader />}
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
          <Route path={'/my-searches'} element={<MySearches />} />
        </Routes>
      </StyledGlobalContainer>
      {isAuth && <BottomMenu />}
    </>
  )
}
