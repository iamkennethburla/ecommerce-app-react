import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ProductsService } from 'apps/client-admin/src/app/Services'

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
