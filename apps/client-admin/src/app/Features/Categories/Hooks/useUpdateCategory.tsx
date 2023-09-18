import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CategoryService } from 'apps/client-admin/src/app/Services'
import { useNavigate } from 'react-router-dom'

export const useUpdateCategory = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { isLoading, mutate } = useMutation({
    mutationFn: CategoryService.put,
    onSuccess: () => {
      queryClient.invalidateQueries(['categories'])
      queryClient.invalidateQueries(['categories-table'])
      navigate('/categories')
    },
  })

  return { isLoading, mutate }
}
