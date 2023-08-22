import { ITable } from '@ecommerce-app/admin/Components'
import { IOrdersStore } from '@ecommerce-app/admin/Features/Orders/Interfaces'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: IOrdersStore = {
  ordersTable: {
    data: [],
    pagination: {
      page: 1,
      pageSize: 10,
    },
  },
}

const store = createSlice({
  name: 'admin/orders',
  initialState,
  reducers: {
    updateOrdersTable: (state, action: PayloadAction<ITable>) => {
      state.ordersTable = action.payload
    },
  },
})

const actions = store.actions
const reducers = store.reducer

export { actions, reducers }
export default store
