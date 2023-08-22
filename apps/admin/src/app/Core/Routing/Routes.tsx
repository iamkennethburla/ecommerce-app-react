import LoginRoutes from 'apps/admin/src/app/Pages/Auth'
import CategoriesRoutes from 'apps/admin/src/app/Pages/Categories'
import DashboardRoutes from 'apps/admin/src/app/Pages/Dashboard'
import LayoutRoutes from 'apps/admin/src/app/Pages/Layout'
import OrdersRoutes from 'apps/admin/src/app/Pages/Orders'
import SettingsRoutes from 'apps/admin/src/app/Pages/Settings'
import VariantsRoutes from 'apps/admin/src/app/Pages/Variants'

export const Routes = [
  ...LoginRoutes,
  ...DashboardRoutes,
  ...SettingsRoutes,
  ...CategoriesRoutes,
  ...VariantsRoutes,
  ...OrdersRoutes,
  // MAKE SURE LAYOUT ROUTES IS THE LAST ITEM
  ...LayoutRoutes,
]
