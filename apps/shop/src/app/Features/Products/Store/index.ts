import {
  IProduct,
  IProductsStore,
} from '@ecommerce-app/shop/Features/Products/Interfaces'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: IProductsStore = {
  featuredProducts: [],
  previewProduct: undefined,
}

const store = createSlice({
  name: 'shop/products',
  initialState,
  reducers: {
    updateFeaturedProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.featuredProducts = action.payload
    },
    setPreviewProduct: (state, action: PayloadAction<number>) => {
      state.previewProduct = state.featuredProducts.find(
        (product) => product.id === action.payload
      )
    },
  },
})

const actions = store.actions
const reducers = store.reducer

export { actions, reducers }
export default store
