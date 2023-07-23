import { MySearches, SearchDetail } from './'
import { Route } from '../../routes/Routes'

export const mySearchesRoutes: Route[] = [
  {
    path: '/:id',
    Component: SearchDetail,
    name: 'Detalle de busqueda',
    needAuth: true,
  },
  {
    path: '/',
    Component: MySearches,
    name: 'Mis Busquedas',
    needAuth: true,
  },
]
