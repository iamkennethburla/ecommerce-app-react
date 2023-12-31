import { Routing } from '@ecommerce-app/common-core'
import { Routes } from 'apps/client-admin/src/app/Core/Routing/Routes'
import { useValidateToken } from 'apps/client-admin/src/app/Features/Auth/Hooks'

export function App() {
  const { isValid, isLoading } = useValidateToken()

  return isLoading ? (
    <> Loading App</>
  ) : (
    <Routing
      routes={Routes}
      isAuthenticated={isValid}
      hasAppLoadError={false}
      userPermissions={[]}
    />
  )
}

export default App
