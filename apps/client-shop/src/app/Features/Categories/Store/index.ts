import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
  ICategoriesStore,
  ICategory,
} from 'apps/client-shop/src/app/Features/Categories/Interfaces'

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
