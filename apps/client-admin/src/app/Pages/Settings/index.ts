import { IRoute } from '@ecommerce-app/common-core'
import { lazy } from 'react'

const SettingsPage = lazy(() => import('./SettingsPage/SettingsPage'))

const BASE_URL = '/settings'

const Routes: IRoute[] = [
  {
    key: 'settings-page',
    isRouteProtected: true,
    component: SettingsPage,
    path: BASE_URL,
  },
]

export default Routes
