import { ProductsService } from '@ecommerce-app/admin/src/app/Services'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useDeleteProduct = () => {
  const queryClient = useQueryClient()

  const { isLoading, mutate } = useMutation({
    mutationFn: ProductsService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries(['products-table'])
    },
  })

  return { isLoading, mutate }
}
