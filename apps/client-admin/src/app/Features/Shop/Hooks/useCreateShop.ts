import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useCreateShopModal } from 'apps/client-admin/src/app/Features/Shop/Hooks'
import { ShopService } from 'apps/client-admin/src/app/Services'

export const useCreateShop = () => {
  const queryClient = useQueryClient()
  const { close: hideCreateShopModal } = useCreateShopModal()
  const { isLoading, mutate } = useMutation({
    mutationFn: ShopService.post,
    onSuccess: () => {
      queryClient.invalidateQueries(['shop'])
      hideCreateShopModal()
    },
  })

  return { isLoading, mutate }
}
