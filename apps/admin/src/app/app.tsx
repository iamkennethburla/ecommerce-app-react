import { Routes, Routing } from 'apps/admin/src/app/Core'
import { reducers } from './Core/Store'
import ReactQueryProvider from './Providers/ReactQueryProvider'
import ReduxProvider from './Providers/ReduxProvider'

export function App() {
  return (
    <ReduxProvider reducers={reducers}>
      <ReactQueryProvider>
        <Routing routes={Routes} isAuthenticated={false} userPermissions={[]} />
      </ReactQueryProvider>
    </ReduxProvider>
  )
}

export default App
