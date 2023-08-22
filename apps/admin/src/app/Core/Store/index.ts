import { ICategoriesStore } from '@ecommerce-app/admin/Features/Categories/Interfaces'
import CategoriesStore from '@ecommerce-app/admin/Features/Categories/Store'
import { ILayoutStore } from '@ecommerce-app/admin/Features/Layout/Interfaces'
import LayoutStore from '@ecommerce-app/admin/Features/Layout/Store'
import { IOrdersStore } from '@ecommerce-app/admin/Features/Orders/Interfaces'
import OrdersStore from '@ecommerce-app/admin/Features/Orders/Store'
import { IProductsStore } from '@ecommerce-app/admin/Features/Products/Interfaces'
import ProductsStore from '@ecommerce-app/admin/Features/Products/Store'
import { IShopStore } from '@ecommerce-app/admin/Features/Shop/Interfaces'
import ShopStore from '@ecommerce-app/admin/Features/Shop/Store'
import { IVariantsStore } from '@ecommerce-app/admin/Features/Variants/Interfaces'
import VariantsStore from '@ecommerce-app/admin/Features/Variants/Store'

export interface IStore {
  layout: ILayoutStore
  shop: IShopStore
  categories: ICategoriesStore
  orders: IOrdersStore
  variants: IVariantsStore
  products: IProductsStore
}

const reducers = {
  layout: LayoutStore.reducer,
  shop: ShopStore.reducer,
  categories: CategoriesStore.reducer,
  orders: OrdersStore.reducer,
  variants: VariantsStore.reducer,
  products: ProductsStore.reducer,
}

export { reducers }
