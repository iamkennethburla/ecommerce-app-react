import { actions } from '@ecommerce-app/admin/Features/Shop/Store'
import { ShopService } from '@ecommerce-app/admin/Services'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export function useGetShop() {
  const dispatch = useDispatch()
  const { data, isLoading, error } = useQuery({
    queryKey: ['shop'],
    queryFn: ShopService.get,
  })

  useEffect(() => {
    if (data && !isLoading) {
      dispatch(actions.updateStoreList(data))
    }
  }, [data, dispatch, isLoading])

  return { data, isLoading, error }
}
