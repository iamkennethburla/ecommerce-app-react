import { ICategoriesStore } from '@ecommerce-app/admin/Features/Categories/Interfaces'
import CategoriesStore from '@ecommerce-app/admin/Features/Categories/Store'
import { ILayoutStore } from '@ecommerce-app/admin/Features/Layout/Interfaces'
import LayoutStore from '@ecommerce-app/admin/Features/Layout/Store'
import { IOrdersStore } from '@ecommerce-app/admin/Features/Orders/Interfaces'
import OrdersStore from '@ecommerce-app/admin/Features/Orders/Store'
import { IShopStore } from '@ecommerce-app/admin/Features/Shop/Interfaces'
import ShopStore from '@ecommerce-app/admin/Features/Shop/Store'

export interface IStore {
  layout: ILayoutStore
  shop: IShopStore
  categories: ICategoriesStore
  orders: IOrdersStore
}

const reducers = {
  layout: LayoutStore.reducer,
  shop: ShopStore.reducer,
  categories: CategoriesStore.reducer,
  orders: OrdersStore.reducer,
}

export { reducers }
