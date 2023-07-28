export function useValidateToken() {
  const accessToken = localStorage.getItem('ecom-app-access-token') || ''
  const isLoading = false
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ['shop', { accessToken }],
  //   queryFn: ValidateTokenService.get,
  // })

  return { isValid: accessToken !== '', isLoading }
}
