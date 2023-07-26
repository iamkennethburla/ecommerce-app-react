import { Routes, Routing } from 'apps/admin/src/app/Core'
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
