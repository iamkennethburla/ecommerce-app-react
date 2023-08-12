import { ITable } from '@ecommerce-app/admin/Components'
import { ICategoriesStore } from '@ecommerce-app/admin/Features/Categories/Interfaces'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: ICategoriesStore = {
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
    updateCategoriesTable: (state, action: PayloadAction<ITable>) => {
      state.categoriesTable = action.payload
    },
  },
})

const actions = store.actions
const reducers = store.reducer

export { actions, reducers }
export default store
