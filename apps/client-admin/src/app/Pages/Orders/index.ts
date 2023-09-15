import { IRoute } from '@ecommerce-app/common-core'
import { lazy } from 'react'

const OrdersPage = lazy(() => import('./OrdersPage/OrdersPage'))

const BASE_URL = '/orders'

const Routes: IRoute[] = [
  {
    key: 'orders-page',
    isRouteProtected: true,
    component: OrdersPage,
    path: BASE_URL,
  },
]

export default Routes
