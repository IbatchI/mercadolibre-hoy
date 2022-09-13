import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { StyledGlobalContainer } from '../utils/styledGlobal'
import Navbar from './components/UI/molecules/NavBar/NavBar'
import SearchResults from './pages/SearchResults'
import './App.css'

export const App = () => (
  <BrowserRouter>
    <Navbar />

    <StyledGlobalContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:keyword" element={<SearchResults />} />
      </Routes>
    </StyledGlobalContainer>
  </BrowserRouter>
)
