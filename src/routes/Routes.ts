import { Home, Register, SearchResults } from '../pages'
import { MySearchesPage } from '../pages/MySearches/MySearchesRoutes'

type ReactElement = () => JSX.Element

export interface Route {
  to?: string
  path: string
  Component: ReactElement
  name: string
  needAuth: boolean
}

export const routes: Route[] = [
  {
    to: '/',
    path: '/',
    Component: Home,
    name: 'Home',
    needAuth: false,
  },
  {
    path: '/search/:keyword',
    Component: SearchResults,
    name: 'Resultados de busquedas',
    needAuth: true,
  },
  {
    path: '/register',
    Component: Register,
    name: 'Registro',
    needAuth: false,
  },
  {
    path: '/my-searches/*',
    Component: MySearchesPage,
    name: 'Mis busquedas',
    needAuth: true,
  },
]
