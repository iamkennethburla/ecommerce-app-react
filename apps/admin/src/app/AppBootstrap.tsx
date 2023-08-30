import { Routing } from '@ecommerce-app/common-core'
import { Routes } from 'apps/admin/src/app/Core/Routing/Routes'
import { useEffect, useState } from 'react'
import { useGetUser, useValidateToken } from './Features/Auth/Hooks'

interface IProcessValues {
  done: boolean
  loading: boolean
  error: boolean
}
interface IProcessState {
  tokenValid: IProcessValues
  userData: IProcessValues
}

export function App() {
  const [processState, setProcessState] = useState<IProcessState>({
    tokenValid: {
      done: false,
      loading: true,
      error: false,
    },
    userData: {
      done: false,
      loading: true,
      error: false,
    },
  })

  const { isValid, isLoading: isValidateTokenLoading } = useValidateToken()
  const { data: userData, isLoading: isUserLoading } = useGetUser()

  useEffect(() => {
    if (!isValidateTokenLoading && isValid) {
      setProcessState((prevState) => ({
        ...prevState,
        tokenValid: {
          ...prevState.tokenValid,
          loading: false,
          done: true,
        },
      }))
    }
  }, [isValid, isValidateTokenLoading])

  useEffect(() => {
    if (!isUserLoading && userData) {
      setProcessState((prevState) => ({
        ...prevState,
        userData: {
          ...prevState.userData,
          loading: false,
          done: true,
        },
      }))
    }
  }, [isUserLoading, userData])

  return isProcessesLoading(processState) ? (
    <> Loading App</>
  ) : (
    <Routing
      routes={Routes}
      isAuthenticated={isValid}
      error={false}
      userPermissions={[]}
    />
  )

  function isProcessesLoading(processState: IProcessState) {
    return Object.entries(processState).every(([_, process]) => process.loading)
  }
}

export default App
