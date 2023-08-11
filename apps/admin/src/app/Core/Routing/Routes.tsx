import LoginRoutes from 'apps/admin/src/app/Pages/Auth'
import CategoriesRoutes from 'apps/admin/src/app/Pages/Categories'
import DashboardRoutes from 'apps/admin/src/app/Pages/Dashboard'
import LayoutRoutes from 'apps/admin/src/app/Pages/Layout'
import SettingsRoutes from 'apps/admin/src/app/Pages/Settings'

export const Routes = [
  ...LoginRoutes,
  ...DashboardRoutes,
  ...SettingsRoutes,
  ...CategoriesRoutes,
  // MAKE SURE LAYOUT ROUTES IS THE LAST ITEM
  ...LayoutRoutes,
]
