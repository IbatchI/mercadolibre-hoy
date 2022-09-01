import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import './App.css'
import { Navbar } from './components/UI/molecules/NavBar/NavBar'

export const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
)
