import {
  IShop,
  IShopStore,
} from '@ecommerce-app/admin/Features/Shop/Interfaces'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: IShopStore = {
  shops: [],
}

const store = createSlice({
  name: 'admin/store',
  initialState,
  reducers: {
    updateStoreList: (state, action: PayloadAction<IShop[]>) => {
      state.shops = action.payload
    },
  },
})

const actions = store.actions
const reducers = store.reducer

export { actions, reducers }
export default store
