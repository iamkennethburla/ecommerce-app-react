import { IRoute } from '@ecommerce-app/common-core'
import { lazy } from 'react'

const CategoryPage = lazy(() => import('./CategoryPage/CategoryPage'))

const Routes: IRoute[] = [
  {
    key: 'category-page',
    isRouteProtected: false,
    component: CategoryPage,
    path: '/category/:categoryId',
  },
]

export default Routes
