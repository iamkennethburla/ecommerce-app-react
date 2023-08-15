import { CategoryService } from '@ecommerce-app/admin/Services'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

export const useUpdateCategory = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { isLoading, mutate } = useMutation({
    mutationFn: CategoryService.put,
    onSuccess: () => {
      queryClient.invalidateQueries(['categories'])
      navigate('/categories')
    },
  })

  return { isLoading, mutate }
}
