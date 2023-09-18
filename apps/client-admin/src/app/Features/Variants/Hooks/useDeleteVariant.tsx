import { useMutation, useQueryClient } from '@tanstack/react-query'
import { VariantsService } from 'apps/client-admin/src/app/Services'

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
