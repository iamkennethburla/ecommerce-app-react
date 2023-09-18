import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IShop, IShopStore } from 'apps/client-shop/src/app/Features/Shop/Interfaces'

const initialState: IShopStore = {
  currentShop: undefined,
}

const store = createSlice({
  name: 'store/shop',
  initialState,
  reducers: {
    updateCurrentShop: (state, action: PayloadAction<IShop>) => {
      state.currentShop = action.payload
    },
  },
})

const actions = store.actions
const reducers = store.reducer

export { actions, reducers }
export default store
