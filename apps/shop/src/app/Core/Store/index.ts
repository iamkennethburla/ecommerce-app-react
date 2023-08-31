import { ICategoriesStore } from '@ecommerce-app/shop/Features/Categories/Interfaces'
import CategoriesStore from '@ecommerce-app/shop/Features/Categories/Store'
import { ILayoutStore } from '@ecommerce-app/shop/Features/Layout/Interfaces'
import LayoutStore from '@ecommerce-app/shop/Features/Layout/Store'
import { IProductsStore } from '@ecommerce-app/shop/Features/Products/Interfaces'
import ProductsStore from '@ecommerce-app/shop/Features/Products/Store'
import { IShopStore } from '@ecommerce-app/shop/Features/Shop/Interfaces'
import ShopStore from '@ecommerce-app/shop/Features/Shop/Store'

export interface IStore {
  layout: ILayoutStore
  products: IProductsStore
  categories: ICategoriesStore
  shop: IShopStore
}

const reducers = {
  layout: LayoutStore.reducer,
  products: ProductsStore.reducer,
  categories: CategoriesStore.reducer,
  shop: ShopStore.reducer,
}

export { reducers }
