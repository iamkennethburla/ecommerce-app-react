import AppBootstrap from './AppBootstrap'
import { reducers } from './Core/Store'
import ReactQueryProvider from './Providers/ReactQueryProvider'
import ReduxProvider from './Providers/ReduxProvider'

export function App() {
  return (
    <ReduxProvider reducers={reducers}>
      <ReactQueryProvider>
        <AppBootstrap />
      </ReactQueryProvider>
    </ReduxProvider>
  )
}

export default App
