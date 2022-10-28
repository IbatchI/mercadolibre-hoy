import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes/AppRoutes'
import { AuthProvider } from './context/AuthProvider'

import './App.css'

export const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </BrowserRouter>
)
