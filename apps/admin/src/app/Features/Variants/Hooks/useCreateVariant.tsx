import { VariantsService } from '@ecommerce-app/common-services'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

export const useCreateVariant = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { isLoading, mutate } = useMutation({
    mutationFn: VariantsService.post,
    onSuccess: () => {
      queryClient.invalidateQueries(['variants-table'])
      navigate('/variants')
    },
  })

  return { isLoading, mutate }
}
