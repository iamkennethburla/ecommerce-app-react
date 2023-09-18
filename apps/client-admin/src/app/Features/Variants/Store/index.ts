import { ITable } from '@ecommerce-app/common-components'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
  IVariant,
  IVariantsStore,
} from 'apps/client-admin/src/app/Features/Variants/Interfaces'

const initialState: IVariantsStore = {
  variants: [],
  variantsTable: {
    data: [],
    pagination: {
      page: 1,
      pageSize: 10,
    },
  },
}

const store = createSlice({
  name: 'admin/variants',
  initialState,
  reducers: {
    updateVariantsTable: (state, action: PayloadAction<ITable>) => {
      state.variantsTable = action.payload
    },
    updateVariants: (state, action: PayloadAction<IVariant[]>) => {
      state.variants = action.payload
    },
  },
})

const actions = store.actions
const reducers = store.reducer

export { actions, reducers }
export default store
