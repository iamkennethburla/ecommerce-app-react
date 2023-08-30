import { IRoute } from '@ecommerce-app/common-core'
import { lazy } from 'react'

const LoginPage = lazy(() => import('./LoginPage/LoginPage'))

const BASE_URL = '/login'

const Routes: IRoute[] = [
  {
    key: 'login-page',
    isRouteProtected: false,
    component: LoginPage,
    path: BASE_URL,
    title: 'Login',
  },
]

export default Routes
