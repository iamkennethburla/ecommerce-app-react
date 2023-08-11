import { IRoute } from 'apps/admin/src/app/Core/Routing/Routing'
import { lazy } from 'react'

const CategoriesPage = lazy(() => import('./CategoriesPage/CategoriesPage'))

const BASE_URL = '/categories'

const Routes: IRoute[] = [
  {
    key: 'categories-page',
    isRouteProtected: true,
    component: CategoriesPage,
    path: BASE_URL,
    title: 'Categories',
  },
]

export default Routes
