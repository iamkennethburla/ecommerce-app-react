import { VariantsService } from '@ecommerce-app/admin/Services'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useDeleteVariant = () => {
  const queryClient = useQueryClient()

  const { isLoading, mutate } = useMutation({
    mutationFn: VariantsService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries(['variants-table'])
    },
  })

  return { isLoading, mutate }
}
