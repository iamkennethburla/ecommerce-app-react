import { configureStore } from '@reduxjs/toolkit'
import { Provider as StoreProvider } from 'react-redux'
import { ReducersMapObject, combineReducers } from 'redux'

interface Props {
  children: React.ReactNode
  reducers: ReducersMapObject
}

export const ReduxProvider = ({ children, reducers }: Props) => {
  const combinedReducers = combineReducers(reducers)

  const store = configureStore({
    reducer: combinedReducers,
    devTools: process.env.NODE_ENV === 'development',
  })

  return <StoreProvider store={store}>{children}</StoreProvider>
}
