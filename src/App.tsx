import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import './App.css'
import Navbar from './components/UI/molecules/NavBar/Navbar'
import { StyledGlobalContainer } from '../utils/styledGlobal'

export const App = () => (
  <BrowserRouter>
    <Navbar />
    <StyledGlobalContainer>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </StyledGlobalContainer>
  </BrowserRouter>
)
