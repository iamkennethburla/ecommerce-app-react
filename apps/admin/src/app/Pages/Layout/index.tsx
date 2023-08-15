import { IRoute } from 'apps/admin/src/app/Core/Routing/Routing'
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const AccessDeniedPage = lazy(
  () => import('./AccessDeniedPage/AccessDeniedPage')
)
const NotFoundPage = lazy(() => import('./NotFoundPage/NotFoundPage'))

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
    title: 'Access Denied',
  },
  {
    key: 'not-found',
    isRouteProtected: true,
    component: NotFoundPage,
    path: '*',
    title: 'Page Not Found',
  },
]

export default Routes
