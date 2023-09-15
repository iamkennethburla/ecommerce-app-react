import { IShop, IShopStore } from '@ecommerce-app/shop/Features/Shop/Interfaces'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

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
