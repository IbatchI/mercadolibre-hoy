import { Route, Routes } from 'react-router-dom'

import { AuthContext } from '../context/AuthProvider'
import { Navbar } from '../components/UI/molecules/NavBar/NavBar'
import { Register, SearchResults, Home } from '../pages'
import { StyledGlobalContainer } from '../../utils/styledGlobal'
import { useContext } from 'react'

export const AppRoutes = () => {
  const { isAuth } = useContext(AuthContext)

  return (
    <>
      <Navbar />
      <StyledGlobalContainer>
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth} />} />
          <Route path="/search/:keyword" element={<SearchResults />} />
          <Route path={'/register'} element={<Register />} />
        </Routes>
      </StyledGlobalContainer>
    </>
  )
}
