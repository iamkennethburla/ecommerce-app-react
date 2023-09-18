import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CategoryService } from 'apps/client-admin/src/app/Services'

export const useDeleteCategory = () => {
  const queryClient = useQueryClient()

  const { isLoading, mutate } = useMutation({
    mutationFn: CategoryService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries(['categories'])
      queryClient.invalidateQueries(['categories-table'])
    },
  })

  return { isLoading, mutate }
}
