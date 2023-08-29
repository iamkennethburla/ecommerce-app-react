import { CategoryService } from '@ecommerce-app/admin/Services'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

export const useCreateCategory = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { isLoading, mutate } = useMutation({
    mutationFn: CategoryService.post,
    onSuccess: () => {
      queryClient.invalidateQueries(['categories'])
      queryClient.invalidateQueries(['categories-table'])
      navigate('/categories')
    },
  })

  return { isLoading, mutate }
}
