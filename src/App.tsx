import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes/AppRoutes'
import { Toast } from './components/UI/atoms/Toast/Toast'

export const App = () => (
  <>
    <Toast />
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </>
)
