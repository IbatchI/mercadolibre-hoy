import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes/AppRoutes'
import { AuthProvider } from './context/AuthProvider'

import './App.css'
import { LoadingProvider } from './context/LoadingProvider'

export const App = () => (
  <BrowserRouter>
    <LoadingProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </LoadingProvider>
  </BrowserRouter>
)
