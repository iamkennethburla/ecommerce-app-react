import HomeRoutes from 'apps/shop/src/app/Pages/Home'
import LayoutRoutes from 'apps/shop/src/app/Pages/Layout'

export const Routes = [
  ...HomeRoutes,
  // MAKE SURE LAYOUT ROUTES IS THE LAST ITEM
  ...LayoutRoutes,
]
