import { IRoute } from '@ecommerce-app/common-core'
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const AccessDeniedPage = lazy(
  () => import('./AccessDeniedPage/AccessDeniedPage')
)
const NotFoundPage = lazy(() => import('./NotFoundPage/NotFoundPage'))
const SystemErrorPage = lazy(() => import('./SystemErrorPage/SystemErrorPage'))

const Routes: IRoute[] = [
  {
    key: 'default-page',
    isRouteProtected: true,
    component: () => <Navigate to="/dashboard" />,
    path: '/',
  },
  {
    key: 'access-denied',
    isRouteProtected: true,
    component: AccessDeniedPage,
    path: '/access-denied',
  },
  {
    key: 'system-error',
    isRouteProtected: true,
    component: SystemErrorPage,
    path: '/system-error',
  },
  {
    key: 'not-found',
    isRouteProtected: true,
    component: NotFoundPage,
    path: '*',
  },
]

export default Routes
