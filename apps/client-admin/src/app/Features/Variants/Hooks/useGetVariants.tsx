import { useQuery } from '@tanstack/react-query'
import { IStore } from 'apps/client-admin/src/app/Core/Store'
import { IVariant } from 'apps/client-admin/src/app/Features/Variants/Interfaces'
import { actions } from 'apps/client-admin/src/app/Features/Variants/Store'
import { VariantsService } from 'apps/client-admin/src/app/Services'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function useGetVariants() {
  const dispatch = useDispatch()
  const { activeShop } = useSelector((store: IStore) => store.shop)

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['variants', { filter: { shopId: activeShop?.id } }],
    queryFn: VariantsService.get,
    cacheTime: 0,
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    if (data && !isLoading) {
      const variants = mapVariantsData(data?.data?.data || [])

      dispatch(actions.updateVariants(variants))
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
