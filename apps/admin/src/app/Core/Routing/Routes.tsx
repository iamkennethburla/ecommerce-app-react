import LoginRoutes from 'apps/admin/src/app/Pages/Auth'
import DashboardRoutes from 'apps/admin/src/app/Pages/Dashboard'
import LayoutRoutes from 'apps/admin/src/app/Pages/Layout'

export const Routes = [
  ...LoginRoutes,
  ...DashboardRoutes,
  // MAKE SURE LAYOUT ROUTES IS THE LAST ITEM
  ...LayoutRoutes,
]
