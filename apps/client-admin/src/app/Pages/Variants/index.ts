import { IRoute } from '@ecommerce-app/common-core'
import { lazy } from 'react'

const VariantsPage = lazy(() => import('./VariantsPage/VariantsPage'))
const CreateVariantsPage = lazy(
  () => import('./CreateVariantsPage/CreateVariantsPage')
)
const EditVariantsPage = lazy(
  () => import('./EditVariantsPage/EditVariantsPage')
)

const BASE_URL = '/variants'

const Routes: IRoute[] = [
  {
    key: 'variants-page',
    isRouteProtected: true,
    component: VariantsPage,
    path: BASE_URL,
  },
  {
    key: 'create-variant-page',
    isRouteProtected: true,
    component: CreateVariantsPage,
    path: BASE_URL + '/create',
  },
  {
    key: 'edit-variant-page',
    isRouteProtected: true,
    component: EditVariantsPage,
    path: BASE_URL + '/edit/:id',
  },
]

export default Routes
