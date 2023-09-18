import { useMutation, useQueryClient } from '@tanstack/react-query'
import { IStore } from 'apps/client-admin/src/app/Core/Store'
import { ShopService } from 'apps/client-admin/src/app/Services'
import { useSelector } from 'react-redux'

export const useUpdatePreferences = () => {
  const queryClient = useQueryClient()
  const { activeShop } = useSelector((store: IStore) => store.shop)

  const { isLoading, mutate: updateSelectedShop } = useMutation({
    mutationFn: ShopService.put,
    onSuccess: () => {
      queryClient.invalidateQueries(['shop'])
    },
  })

  return {
    isLoading,
    mutate: handleMutation,
  }

  function handleMutation(name: string) {
    const currentShop = activeShop

    if (currentShop) {
      updateSelectedShop({
        ...currentShop,
        name,
      })
    }
  }
}
