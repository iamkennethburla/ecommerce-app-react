import { IStore } from '@ecommerce-app/admin/Core/Store'
import { IShop } from '@ecommerce-app/admin/Features/Shop/Interfaces'
import { ShopService } from '@ecommerce-app/admin/Services'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export const useSelectShop = () => {
  const queryClient = useQueryClient()
  const { activeShop } = useSelector((store: IStore) => store.shop)
  const [selectedShop, setSelectedShop] = useState<IShop>()

  const { isLoading: isUpdateCurrentShopLoading, mutate: updateCurrentShop } =
    useMutation({
      mutationFn: ShopService.put,
      onSuccess: () => {
        if (selectedShop !== undefined && selectedShop) {
          updateSelectedShop(selectedShop)
        }
      },
    })

  const { isLoading: isUpdateSelectedShopLoading, mutate: updateSelectedShop } =
    useMutation({
      mutationFn: ShopService.put,
      onSuccess: () => {
        queryClient.invalidateQueries(['shop'])
      },
    })

  return {
    isLoading: isUpdateCurrentShopLoading || isUpdateSelectedShopLoading,
    mutate: handleMutation,
  }

  function handleMutation(shop: IShop) {
    const currentShop = activeShop

    setSelectedShop({
      ...shop,
      active: true,
    })

    if (currentShop) {
      updateCurrentShop({
        ...currentShop,
        active: false,
      })
    }
  }
}
