import { useQuery } from '@tanstack/react-query'
import { IVariant } from 'apps/client-shop/src/app/Features/Variants/Interfaces'
import { actions } from 'apps/client-shop/src/app/Features/Variants/Store'
import { VariantsService } from 'apps/client-shop/src/app/Services'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export function useGetVariants() {
  const dispatch = useDispatch()

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['variants', {}],
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
