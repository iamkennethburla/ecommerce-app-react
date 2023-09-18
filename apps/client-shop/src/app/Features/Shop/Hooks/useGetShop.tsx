import { useQuery } from '@tanstack/react-query'
import { actions } from 'apps/client-shop/src/app/Features/Shop/Store'
import { ShopService } from 'apps/client-shop/src/app/Services'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export function useGetShop() {
  const dispatch = useDispatch()
  const { data, isLoading, error } = useQuery({
    queryKey: ['shop'],
    queryFn: ShopService.get,
    cacheTime: 0,
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    if (data && !isLoading) {
      const shop = {
        id: data?.data?.data?.id,
        name: data?.data?.data?.attributes?.name,
        active: data?.data?.data?.attributes?.active,
      }

      dispatch(actions.updateCurrentShop(shop))
    }
  }, [data, dispatch, isLoading])

  return { data, isLoading, error }
}
