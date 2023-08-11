import { ICategoriesStore } from '@ecommerce-app/admin/Features/Categories/Interfaces'
import ICategories from '@ecommerce-app/admin/Features/Categories/Store'
import { ILayoutStore } from '@ecommerce-app/admin/Features/Layout/Interfaces'
import LayoutStore from '@ecommerce-app/admin/Features/Layout/Store'
import { IShopStore } from '@ecommerce-app/admin/Features/Shop/Interfaces'
import ShopStore from '@ecommerce-app/admin/Features/Shop/Store'

export interface IStore {
  layout: ILayoutStore
  shop: IShopStore
  categories: ICategoriesStore
}

const reducers = {
  layout: LayoutStore.reducer,
  shop: ShopStore.reducer,
  categories: ICategories.reducer,
}

export { reducers }
