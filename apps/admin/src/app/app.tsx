import { Routes, Routing } from 'apps/admin/src/app/Core'
import { reducers } from './Core/Store'
import ReduxProvider from './Providers/ReduxProvider'

export function App() {
  return (
    <ReduxProvider reducers={reducers}>
      <Routing routes={Routes} isAuthenticated={false} userPermissions={[]} />
    </ReduxProvider>
  )
}

export default App
