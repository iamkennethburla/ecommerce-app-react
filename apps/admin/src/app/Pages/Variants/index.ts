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
    title: 'Variants',
  },
  {
    key: 'create-variant-page',
    isRouteProtected: true,
    component: CreateVariantsPage,
    path: BASE_URL + '/create',
    title: 'Variants | Create',
  },
  {
    key: 'edit-variant-page',
    isRouteProtected: true,
    component: EditVariantsPage,
    path: BASE_URL + '/edit/:id',
    title: 'Variants | Edit',
  },
]

export default Routes
