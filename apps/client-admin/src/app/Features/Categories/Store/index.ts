import {
  ICategoriesStore,
  ICategory,
} from '@ecommerce-app/admin/Features/Categories/Interfaces'
import { ITable } from '@ecommerce-app/common-components'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: ICategoriesStore = {
  categories: [],
  categoriesTable: {
    data: [],
    pagination: {
      page: 1,
      pageSize: 10,
    },
  },
}

const store = createSlice({
  name: 'admin/categories',
  initialState,
  reducers: {
    updateCategories: (state, action: PayloadAction<ICategory[]>) => {
      state.categories = action.payload
    },
    updateCategoriesTable: (state, action: PayloadAction<ITable>) => {
      state.categoriesTable = action.payload
    },
  },
})

const actions = store.actions
const reducers = store.reducer

export { actions, reducers }
export default store
