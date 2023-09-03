import { IRoute } from '@ecommerce-app/common-core'
import { lazy } from 'react'

const DashboardPage = lazy(() => import('./DashboardPage/DashboardPage'))

const BASE_URL = '/dashboard'

const Routes: IRoute[] = [
  {
    key: 'dashboard-page',
    isRouteProtected: true,
    component: DashboardPage,
    path: BASE_URL,
  },
]

export default Routes
