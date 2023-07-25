import { ILayoutStore } from '@ecommerce-app/admin/Features/Layout/Interfaces'
import LayoutStore from '@ecommerce-app/admin/Features/Layout/Store'

export interface IStore {
  layout: ILayoutStore
}

const reducers = {
  layout: LayoutStore.reducer,
}

const actions = {
  ...LayoutStore.actions,
}

export { actions, reducers }
