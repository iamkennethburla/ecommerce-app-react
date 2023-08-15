import { IRoute } from 'apps/admin/src/app/Core/Routing/Routing'
import { lazy } from 'react'

const OrdersPage = lazy(() => import('./OrdersPage/OrdersPage'))

const BASE_URL = '/orders'

const Routes: IRoute[] = [
  {
    key: 'orders-page',
    isRouteProtected: true,
    component: OrdersPage,
    path: BASE_URL,
    title: 'Orders',
  },
]

export default Routes
