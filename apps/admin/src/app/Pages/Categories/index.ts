import { IRoute } from 'apps/admin/src/app/Core/Routing/Routing'
import { lazy } from 'react'

const CategoriesPage = lazy(() => import('./CategoriesPage/CategoriesPage'))
const AddCategoriesPage = lazy(() => import('./AddCategoriesPage/AddCategoriesPage'))

const BASE_URL = '/categories'

const Routes: IRoute[] = [
  {
    key: 'categories-page',
    isRouteProtected: true,
    component: CategoriesPage,
    path: BASE_URL,
    title: 'Categories',
  },
  {
    key: 'create-category-page',
    isRouteProtected: true,
    component: AddCategoriesPage,
    path: BASE_URL + '/create',
    title: 'Categories | Create',
  },
]

export default Routes
