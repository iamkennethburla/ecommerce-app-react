import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  sample: {
    toggleStateOne: false,
  },
}

const store = createSlice({
  name: 'admin/layout',
  initialState,
  reducers: {
    toggleStateOne: (state, action: PayloadAction) => {
      state.sample.toggleStateOne = !state.sample.toggleStateOne
    },
  },
})

const actions = store.actions
const reducers = store.reducer

export { actions, reducers }
export default store
