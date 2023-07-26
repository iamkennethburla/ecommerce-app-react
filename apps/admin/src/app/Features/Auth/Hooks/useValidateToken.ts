import { ValidateTokenService } from '@ecommerce-app/admin/Services'
import { useQuery } from '@tanstack/react-query'

export function useValidateToken() {
  const accessToken = localStorage.getItem('ecom-app-access-token') || ''

  const { data, isLoading, error } = useQuery({
    queryKey: ['shop', { accessToken }],
    queryFn: ValidateTokenService.get,
  })

  return { isValid: data?.isValid || false, isLoading, error }
}
