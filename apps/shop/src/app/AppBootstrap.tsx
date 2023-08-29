import { Routing } from '@ecommerce-app/common-core'
import { Routes } from 'apps/shop/src/app/Core/Routing/Routes'

export function App() {
  return <Routing routes={Routes} isAuthenticated={true} userPermissions={[]} />
}

export default App
