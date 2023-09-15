import { IAuthStore } from '@ecommerce-app/admin/src/app/Features/Auth/Interfaces'
import AuthStore from '@ecommerce-app/admin/src/app/Features/Auth/Store'
import { ICategoriesStore } from '@ecommerce-app/admin/src/app/Features/Categories/Interfaces'
import CategoriesStore from '@ecommerce-app/admin/src/app/Features/Categories/Store'
import { ILayoutStore } from '@ecommerce-app/admin/src/app/Features/Layout/Interfaces'
import LayoutStore from '@ecommerce-app/admin/src/app/Features/Layout/Store'
import { IOrdersStore } from '@ecommerce-app/admin/src/app/Features/Orders/Interfaces'
import OrdersStore from '@ecommerce-app/admin/src/app/Features/Orders/Store'
import { IProductsStore } from '@ecommerce-app/admin/src/app/Features/Products/Interfaces'
import ProductsStore from '@ecommerce-app/admin/src/app/Features/Products/Store'
import { IShopStore } from '@ecommerce-app/admin/src/app/Features/Shop/Interfaces'
import ShopStore from '@ecommerce-app/admin/src/app/Features/Shop/Store'
import { IVariantsStore } from '@ecommerce-app/admin/src/app/Features/Variants/Interfaces'
import VariantsStore from '@ecommerce-app/admin/src/app/Features/Variants/Store'

export interface IStore {
  auth: IAuthStore
  layout: ILayoutStore
  shop: IShopStore
  categories: ICategoriesStore
  orders: IOrdersStore
  variants: IVariantsStore
  products: IProductsStore
}

const reducers = {
  auth: AuthStore.reducer,
  layout: LayoutStore.reducer,
  shop: ShopStore.reducer,
  categories: CategoriesStore.reducer,
  orders: OrdersStore.reducer,
  variants: VariantsStore.reducer,
  products: ProductsStore.reducer,
}

export { reducers }

