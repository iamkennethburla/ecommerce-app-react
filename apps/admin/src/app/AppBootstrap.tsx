import { Routing } from '@ecommerce-app/common-core'
import { Routes } from 'apps/admin/src/app/Core/Routing/Routes'
import { useValidateToken } from './Features/Auth/Hooks'

export function App() {
  const { isValid, isLoading } = useValidateToken()

  return isLoading ? (
    <> Loading App</>
  ) : (
    <Routing routes={Routes} isAuthenticated={isValid} userPermissions={[]} />
  )
}

export default App
