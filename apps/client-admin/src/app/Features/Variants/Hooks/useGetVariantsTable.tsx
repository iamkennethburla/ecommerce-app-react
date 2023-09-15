import { IStore } from '@ecommerce-app/admin/src/app/Core/Store'
import { IVariant } from '@ecommerce-app/admin/src/app/Features/Variants/Interfaces'
import { actions } from '@ecommerce-app/admin/src/app/Features/Variants/Store'
import { VariantsService } from '@ecommerce-app/admin/src/app/Services'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function useGetVariantsTable() {
  const dispatch = useDispatch()
  const { activeShop } = useSelector((store: IStore) => store.shop)
  const { variantsTable } = useSelector((store: IStore) => store.variants)

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['variants-table', { filter: { shopId: activeShop?.id } }],
    queryFn: VariantsService.get,
    cacheTime: 0,
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    if (data && !isLoading) {
      const variants = mapVariantsData(data?.data?.data || [])
      const pagination = data?.data?.meta?.pagination

      dispatch(
        actions.updateVariantsTable({
          ...variantsTable,
          data: variants,
          pagination,
        })
      )
    }
  }, [data])

  return { data, isLoading, error, refetch }

  function mapVariantsData(variants: any[]): IVariant[] {
    return variants.map((variant: any) => ({
      id: variant?.id,
      name: variant?.attributes?.name,
      dateModified: variant?.attributes?.updatedAt,
      values: variant?.attributes?.values?.map((value: any) => value?.value),
    }))
  }
}
