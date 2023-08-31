import { actions } from '@ecommerce-app/shop/Features/Shop/Store'
import { ShopService } from '@ecommerce-app/shop/Services'
import { useQuery } from '@tanstack/react-query'
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
      console.log(shop)
      dispatch(actions.updateCurrentShop(shop))
    }
  }, [data, dispatch, isLoading])

  return { data, isLoading, error }
}
