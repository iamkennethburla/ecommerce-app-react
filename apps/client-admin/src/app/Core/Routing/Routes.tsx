import LoginRoutes from 'apps/client-admin/src/app/Pages/Auth'
import CategoriesRoutes from 'apps/client-admin/src/app/Pages/Categories'
import DashboardRoutes from 'apps/client-admin/src/app/Pages/Dashboard'
import LayoutRoutes from 'apps/client-admin/src/app/Pages/Layout'
import OrdersRoutes from 'apps/client-admin/src/app/Pages/Orders'
import ProductsRoutes from 'apps/client-admin/src/app/Pages/Products'
import SettingsRoutes from 'apps/client-admin/src/app/Pages/Settings'
import VariantsRoutes from 'apps/client-admin/src/app/Pages/Variants'

export const Routes = [
  ...LoginRoutes,
  ...DashboardRoutes,
  ...SettingsRoutes,
  ...CategoriesRoutes,
  ...VariantsRoutes,
  ...OrdersRoutes,
  ...ProductsRoutes,
  // MAKE SURE LAYOUT ROUTES IS THE LAST ITEM
  ...LayoutRoutes,
]
