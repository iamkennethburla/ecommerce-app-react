import { CategoryService } from '@ecommerce-app/admin/Services'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useDeleteCategory = () => {
  const queryClient = useQueryClient()

  const { isLoading, mutate } = useMutation({
    mutationFn: CategoryService.delete,
    onSuccess: () => {
      console.log('deleted')
      queryClient.invalidateQueries(['categories'])
    },
  })

  return { isLoading, mutate }
}
