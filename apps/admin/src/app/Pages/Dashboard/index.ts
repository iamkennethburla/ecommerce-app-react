import { IRoute } from 'apps/admin/src/app/Core/Routing/Routing'
import { lazy } from 'react'

const DashboardPage = lazy(() => import('./DashboardPage/DashboardPage'))

const BASE_URL = '/dashboard'

const Routes: IRoute[] = [
  {
    key: 'dashboard-page',
    isRouteProtected: true,
    component: DashboardPage,
    path: BASE_URL,
    title: 'Dashboard',
  },
]

export default Routes
