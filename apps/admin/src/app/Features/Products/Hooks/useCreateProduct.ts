import { ProductsService } from '@ecommerce-app/admin/Services'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

export const useCreateProduct = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { isLoading, mutate } = useMutation({
    mutationFn: ProductsService.post,
    onSuccess: () => {
      queryClient.invalidateQueries(['products-table'])
      navigate('/products')
    },
  })

  return { isLoading, mutate }
}
