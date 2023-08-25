import { LoginService } from '@ecommerce-app/common-services'
import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'

export const useLogin = () => {
  const { data, isLoading, mutate } = useMutation({
    mutationFn: LoginService.post,
  })

  useEffect(() => {
    if (data && !isLoading) {
      localStorage.setItem('ecom-app-access-token', data.data?.jwt)
      setTimeout(() => window.location.replace('/'), 200)
    }
  }, [data, isLoading])

  return { mutate }
}
