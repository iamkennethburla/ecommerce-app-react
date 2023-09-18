import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IAuthStore } from 'apps/client-admin/src/app/Features/Auth/Interfaces'
import { IUser } from '../Interfaces'

const initialState: IAuthStore = {
  user: undefined,
  userPermissionIds: []
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
