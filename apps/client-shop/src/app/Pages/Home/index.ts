import { IRoute } from '@ecommerce-app/common-core'
import { lazy } from 'react'

const HomePage = lazy(() => import('./HomePage/HomePage'))

const Routes: IRoute[] = [
  {
    key: 'home-page',
    isRouteProtected: false,
    component: HomePage,
    path: '/',
  },
]

export default Routes
