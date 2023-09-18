import { useQuery } from '@tanstack/react-query'
import { actions } from 'apps/client-admin/src/app/Features/Auth/Store'
import { UserService } from 'apps/client-admin/src/app/Services'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useValidateToken } from './useValidateToken'

export function useGetUser() {
  const dispatch = useDispatch()
  const { isValid, isLoading: isValidateTokenLoading } = useValidateToken()

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['user', {}],
    queryFn: UserService.get,
    cacheTime: 0,
    refetchOnWindowFocus: false,
    enabled: false,
  })

  useEffect(() => {
    if (isValid && !isValidateTokenLoading) {
      refetch()
    }
  }, [isValidateTokenLoading, isValid, refetch])

  useEffect(() => {
    if (data && !isLoading) {
      const user = {
        id: data?.data?.id,
        username: data?.data?.username,
      }

      dispatch(actions.updateUser(user))
    }
  }, [data])

  return { data, isLoading, error, refetch }
}
