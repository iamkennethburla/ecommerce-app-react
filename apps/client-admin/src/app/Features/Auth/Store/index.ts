import { IAuthStore } from '@ecommerce-app/admin/src/app/Features/Auth/Interfaces'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from '../Interfaces'

const initialState: IAuthStore = {
  user: undefined,
}

const store = createSlice({
  name: 'admin/categories',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
    },
  },
})

const actions = store.actions
const reducers = store.reducer

export { actions, reducers }
export default store
