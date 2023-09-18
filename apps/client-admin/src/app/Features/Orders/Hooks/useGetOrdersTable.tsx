import { useQuery } from '@tanstack/react-query'
import { IStore } from 'apps/client-admin/src/app/Core/Store'
import { IOrder } from 'apps/client-admin/src/app/Features/Orders/Interfaces'
import { actions } from 'apps/client-admin/src/app/Features/Orders/Store'
import { OrdersService } from 'apps/client-admin/src/app/Services'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function useGetOrdersTable() {
  const dispatch = useDispatch()
  const { activeShop } = useSelector((store: IStore) => store.shop)
  const { ordersTable } = useSelector((store: IStore) => store.orders)

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['orders-table', { filter: { shopId: activeShop?.id } }],
    queryFn: OrdersService.get,
    cacheTime: 0,
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    if (data && !isLoading) {
      const orders = mapOrdersData(data?.data?.data || [])
      const pagination = data?.data?.meta?.pagination

      dispatch(
        actions.updateOrdersTable({
          ...ordersTable,
          data: orders,
          pagination,
        })
      )
    }
  }, [data])

  return { data, isLoading, error, refetch }

  function mapOrdersData(orders: any[]): IOrder[] {
    return orders.map((orders: any) => ({
      id: orders?.id,
      products: orders?.attributes?.products?.data?.map((product: any) => ({
        id: product?.id,
        name: product?.attributes?.name,
      })),
      customerName: orders?.attributes?.customer?.data?.attributes?.name,
      phone: orders?.attributes?.customer?.data?.attributes?.phoneNumber,
      address: orders?.attributes?.customer?.data?.attributes?.address,
      price: orders?.attributes?.price,
      paid: orders?.attributes?.paid,
      dateModified: orders?.attributes?.updatedAt,
    }))
  }
}
