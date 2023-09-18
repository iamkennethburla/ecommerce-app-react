import { ICategoriesStore } from 'apps/client-shop/src/app/Features/Categories/Interfaces'
import CategoriesStore from 'apps/client-shop/src/app/Features/Categories/Store'
import { ILayoutStore } from 'apps/client-shop/src/app/Features/Layout/Interfaces'
import LayoutStore from 'apps/client-shop/src/app/Features/Layout/Store'
import { IProductsStore } from 'apps/client-shop/src/app/Features/Products/Interfaces'
import ProductsStore from 'apps/client-shop/src/app/Features/Products/Store'
import { IShopStore } from 'apps/client-shop/src/app/Features/Shop/Interfaces'
import ShopStore from 'apps/client-shop/src/app/Features/Shop/Store'
import { IVariantsStore } from 'apps/client-shop/src/app/Features/Variants/Interfaces'
import VariantsStore from 'apps/client-shop/src/app/Features/Variants/Store'

export interface IStore {
  layout: ILayoutStore
  products: IProductsStore
  categories: ICategoriesStore
  shop: IShopStore
  variants: IVariantsStore
}

const reducers = {
  layout: LayoutStore.reducer,
  products: ProductsStore.reducer,
  categories: CategoriesStore.reducer,
  shop: ShopStore.reducer,
  variants: VariantsStore.reducer,
}

export { reducers }
