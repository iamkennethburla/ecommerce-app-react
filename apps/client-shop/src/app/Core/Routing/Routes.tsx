import CategoryRoutes from 'apps/shop/src/app/Pages/Category'
import HomeRoutes from 'apps/shop/src/app/Pages/Home'
import LayoutRoutes from 'apps/shop/src/app/Pages/Layout'

export const Routes = [
  ...CategoryRoutes,
  ...HomeRoutes,
  // MAKE SURE LAYOUT ROUTES IS THE LAST ITEM
  ...LayoutRoutes,
]
