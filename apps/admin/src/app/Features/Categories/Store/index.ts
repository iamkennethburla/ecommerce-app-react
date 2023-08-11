import {
  ICategoriesStore,
  ICategory,
} from '@ecommerce-app/admin/Features/Categories/Interfaces'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: ICategoriesStore = {
  categories: [],
}

const store = createSlice({
  name: 'admin/categories',
  initialState,
  reducers: {
    updateCategoryList: (state, action: PayloadAction<ICategory[]>) => {
      state.categories = action.payload
    },
  },
})

const actions = store.actions
const reducers = store.reducer

export { actions, reducers }
export default store
