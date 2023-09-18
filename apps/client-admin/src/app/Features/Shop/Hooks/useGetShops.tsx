import { useQuery } from '@tanstack/react-query'
import { IShop } from 'apps/client-admin/src/app/Features/Shop/Interfaces'
import { actions } from 'apps/client-admin/src/app/Features/Shop/Store'
import { ShopService } from 'apps/client-admin/src/app/Services'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export function useGetShops() {
  const dispatch = useDispatch()
  const { data, isLoading, error } = useQuery({
    queryKey: ['shop'],
    queryFn: ShopService.get,
    cacheTime: 0,
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    if (data && !isLoading) {
      const shopList = mapShopData(data?.data?.data || [])

      dispatch(actions.updateStoreList(shopList))
    }
  }, [data, dispatch, isLoading])

  return { data, isLoading, error }

  function mapShopData(shops: any[]): IShop[] {
    return shops.map((shop: any) => ({
      id: shop.id,
      name: shop?.attributes?.name,
      active: shop?.attributes?.active,
    }))
  }
}
