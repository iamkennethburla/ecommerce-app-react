export function useValidateToken() {
  const accessToken = localStorage.getItem('ecom-app-access-token') || ''

  const isTokenValid =
    accessToken !== '' && accessToken !== 'undefined' && accessToken !== 'null'

  const isLoading = false

  return { isValid: isTokenValid, isLoading }
}
