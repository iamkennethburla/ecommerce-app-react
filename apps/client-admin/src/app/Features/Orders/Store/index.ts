import { ITable } from '@ecommerce-app/common-components'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IOrdersStore } from 'apps/client-admin/src/app/Features/Orders/Interfaces'

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
