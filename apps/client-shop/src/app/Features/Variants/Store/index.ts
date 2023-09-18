import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
  IVariant,
  IVariantsStore,
} from 'apps/client-shop/src/app/Features/Variants/Interfaces'

const initialState: IVariantsStore = {
  variants: [],
}

const store = createSlice({
  name: 'admin/variants',
  initialState,
  reducers: {
    updateVariants: (state, action: PayloadAction<IVariant[]>) => {
      state.variants = action.payload
    },
  },
})

const actions = store.actions
const reducers = store.reducer

export { actions, reducers }
export default store
