import { useMutation, useQueryClient } from '@tanstack/react-query'
import { VariantsService } from 'apps/client-admin/src/app/Services'
import { useNavigate } from 'react-router-dom'

export const useUpdateVariant = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { isLoading, mutate } = useMutation({
    mutationFn: VariantsService.put,
    onSuccess: () => {
      queryClient.invalidateQueries(['variants-table'])
      navigate('/variants')
    },
  })

  return { isLoading, mutate }
}
