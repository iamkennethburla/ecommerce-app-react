import { ILayoutStore } from '@ecommerce-app/shop/Features/Layout/Interfaces'
import LayoutStore from '@ecommerce-app/shop/Features/Layout/Store'

export interface IStore {
  layout: ILayoutStore
}

const reducers = {
  layout: LayoutStore.reducer,
}

export { reducers }
