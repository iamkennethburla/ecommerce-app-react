import { IRoute } from '@ecommerce-app/common-core'
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const NotFoundPage = lazy(() => import('./NotFoundPage/NotFoundPage'))

const Routes: IRoute[] = [
  {
    key: 'default-page',
    isRouteProtected: false,
    component: () => <Navigate to="/" />,
    path: '/',
  },
  {
    key: 'not-found',
    isRouteProtected: false,
    component: NotFoundPage,
    path: '*',
  },
]

export default Routes
