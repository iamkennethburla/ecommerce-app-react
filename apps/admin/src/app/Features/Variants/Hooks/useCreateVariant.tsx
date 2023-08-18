import { VariantsService } from '@ecommerce-app/admin/Services'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

export const useCreateVariant = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { isLoading, mutate } = useMutation({
    mutationFn: VariantsService.post,
    onSuccess: () => {
      queryClient.invalidateQueries(['categories'])
      navigate('/categories')
    },
  })

  return { isLoading, mutate }
}
