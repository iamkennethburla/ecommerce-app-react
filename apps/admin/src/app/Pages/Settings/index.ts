import { IRoute } from 'apps/admin/src/app/Core/Routing/Routing'
import { lazy } from 'react'

const SettingsPage = lazy(() => import('./SettingsPage/SettingsPage'))

const BASE_URL = '/settings'

const Routes: IRoute[] = [
  {
    key: 'settings-page',
    isRouteProtected: true,
    component: SettingsPage,
    path: BASE_URL,
    title: 'Settings',
  },
]

export default Routes
