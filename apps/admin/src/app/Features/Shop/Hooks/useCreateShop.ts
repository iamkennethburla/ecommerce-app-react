import { useCreateShopModal } from '@ecommerce-app/admin/Features/Shop/Hooks'
import { ShopService } from '@ecommerce-app/common-services'
import { useMutation, useQueryClient } from '@tanstack/react-query'

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
