import { IRoute } from '@ecommerce-app/common-core'
import { lazy } from 'react'

const CategoriesPage = lazy(() => import('./CategoriesPage/CategoriesPage'))
const CreateCategoriesPage = lazy(
  () => import('./CreateCategoriesPage/CreateCategoriesPage')
)
const EditCategoriesPage = lazy(
  () => import('./EditCategoriesPage/EditCategoriesPage')
)

const BASE_URL = '/categories'

const Routes: IRoute[] = [
  {
    key: 'categories-page',
    isRouteProtected: true,
    component: CategoriesPage,
    path: BASE_URL,
  },
  {
    key: 'create-category-page',
    isRouteProtected: true,
    component: CreateCategoriesPage,
    path: BASE_URL + '/create',
  },
  {
    key: 'edit-category-page',
    isRouteProtected: true,
    component: EditCategoriesPage,
    path: BASE_URL + '/edit/:id',
  },
]

export default Routes
