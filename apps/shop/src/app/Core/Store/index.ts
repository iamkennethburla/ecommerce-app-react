import { ILayoutStore } from '@ecommerce-app/shop/Features/Layout/Interfaces'
import LayoutStore from '@ecommerce-app/shop/Features/Layout/Store'
import { IProductsStore } from '@ecommerce-app/shop/Features/Products/Interfaces'
import ProductsStore from '@ecommerce-app/shop/Features/Products/Store'

export interface IStore {
  layout: ILayoutStore
  products: IProductsStore
}

const reducers = {
  layout: LayoutStore.reducer,
  products: ProductsStore.reducer,
}

export { reducers }
