import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes/AppRoutes'
import { AuthProvider } from './context/AuthProvider'
import { LoadingProvider } from './context/LoadingProvider'
import { Toast } from './components/UI/atoms/Toast/Toast'

import './App.css'

export const App = () => (
  <>
    <Toast />
    <BrowserRouter>
      <LoadingProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </LoadingProvider>
    </BrowserRouter>
  </>
)
