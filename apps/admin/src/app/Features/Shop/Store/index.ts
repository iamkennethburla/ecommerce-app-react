import {
  IShop,
  IShopStore,
} from '@ecommerce-app/admin/Features/Shop/Interfaces'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: IShopStore = {
  activeShop: undefined,
  shops: [],
}

const store = createSlice({
  name: 'admin/store',
  initialState,
  reducers: {
    updateStoreList: (state, action: PayloadAction<IShop[]>) => {
      state.shops = action.payload
      state.activeShop = action.payload.find((shop: IShop) => shop.active)
    },
  },
})

const actions = store.actions
const reducers = store.reducer

export { actions, reducers }
export default store
