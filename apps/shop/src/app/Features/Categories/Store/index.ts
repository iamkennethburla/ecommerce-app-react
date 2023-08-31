import {
  ICategoriesStore,
  ICategory,
} from '@ecommerce-app/shop/Features/Categories/Interfaces'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: ICategoriesStore = {
  categories: [],
}

const store = createSlice({
  name: 'admin/categories',
  initialState,
  reducers: {
    updateCategories: (state, action: PayloadAction<ICategory[]>) => {
      state.categories = action.payload
    },
  },
})

const actions = store.actions
const reducers = store.reducer

export { actions, reducers }
export default store
