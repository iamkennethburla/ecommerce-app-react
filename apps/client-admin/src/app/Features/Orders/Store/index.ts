import { IOrdersStore } from '@ecommerce-app/admin/src/app/Features/Orders/Interfaces'
import { ITable } from '@ecommerce-app/common-components'
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
