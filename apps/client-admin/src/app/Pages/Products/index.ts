import { IRoute } from '@ecommerce-app/common-core'
import { lazy } from 'react'

const ProductsPage = lazy(() => import('./ProductsPage/ProductsPage'))
const CreateProductPage = lazy(
  () => import('./CreateProductPage/CreateProductPage')
)
const EditProductPage = lazy(() => import('./EditProductPage/EditProductPage'))

const BASE_URL = '/products'

const Routes: IRoute[] = [
  {
    key: 'products-page',
    isRouteProtected: true,
    component: ProductsPage,
    path: BASE_URL,
  },
  {
    key: 'create-product-page',
    isRouteProtected: true,
    component: CreateProductPage,
    path: BASE_URL + '/create',
  },
  {
    key: 'edit-product-page',
    isRouteProtected: true,
    component: EditProductPage,
    path: BASE_URL + '/edit/:id',
  },
]

export default Routes
