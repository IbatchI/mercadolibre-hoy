import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AuthContext } from '../context/AuthProvider'
import { Navbar } from '../components/UI/molecules/NavBar/NavBar'
import { AuthProtection } from './AuthProtection'
import { Register, SearchResults, Home } from '../pages'
import { StyledGlobalContainer } from '../../utils/styledGlobal'

export const AppRoutes = () => {
  const { isAuth } = useContext(AuthContext)

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
        </Routes>
      </StyledGlobalContainer>
    </>
  )
}
