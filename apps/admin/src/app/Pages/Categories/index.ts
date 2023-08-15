import { IRoute } from 'apps/admin/src/app/Core/Routing/Routing'
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
    title: 'Categories',
  },
  {
    key: 'create-category-page',
    isRouteProtected: true,
    component: CreateCategoriesPage,
    path: BASE_URL + '/create',
    title: 'Categories | Create',
  },
  {
    key: 'edit-category-page',
    isRouteProtected: true,
    component: EditCategoriesPage,
    path: BASE_URL + '/edit/:id',
    title: 'Categories | Edit',
  },
]

export default Routes
