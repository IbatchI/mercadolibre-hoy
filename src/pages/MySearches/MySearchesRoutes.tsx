import { Route, Routes } from 'react-router-dom'
import { AuthProtection } from '../../routes/AuthProtection'
import { mySearchesRoutes } from './routes'

export const MySearchesPage = () => {
  return (
    <Routes>
      {mySearchesRoutes.map(({ path, Component, needAuth }) => (
        <Route
          element={needAuth ? <AuthProtection>{<Component />}</AuthProtection> : <Component />}
          key={path}
          path={path}
        />
      ))}
    </Routes>
  )
}
