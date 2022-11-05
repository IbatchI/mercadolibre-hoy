import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes/AppRoutes'
import { AuthProvider } from './context/AuthProvider'

import './App.css'
import { Toast } from './components/UI/atoms/Toast/Toast'

export const App = () => (
  <>
    <Toast />
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  </>
)
