import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
  IProduct,
  IProductsStore,
} from 'apps/client-shop/src/app/Features/Products/Interfaces'

const initialState: IProductsStore = {
  featuredProducts: [],
  categoryProducts: [],
  previewProduct: undefined,
}

const store = createSlice({
  name: 'shop/products',
  initialState,
  reducers: {
    updateFeaturedProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.featuredProducts = action.payload
    },
    updateCategoryProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.categoryProducts = action.payload
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
