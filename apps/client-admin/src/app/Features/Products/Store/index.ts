import { ITable } from '@ecommerce-app/common-components'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProductsStore } from 'apps/client-admin/src/app/Features/Products/Interfaces'

const initialState: IProductsStore = {
  productsTable: {
    data: [],
    pagination: {
      page: 1,
      pageSize: 10,
    },
  },
}

const store = createSlice({
  name: 'admin/products',
  initialState,
  reducers: {
    updateProductsTable: (state, action: PayloadAction<ITable>) => {
      state.productsTable = action.payload
    },
  },
})

const actions = store.actions
const reducers = store.reducer

export { actions, reducers }
export default store
