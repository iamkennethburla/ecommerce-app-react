import { useQuery } from '@tanstack/react-query'
import { IStore } from 'apps/client-admin/src/app/Core/Store'
import { ICategory } from 'apps/client-admin/src/app/Features/Categories/Interfaces'
import { actions } from 'apps/client-admin/src/app/Features/Categories/Store'
import { CategoryService } from 'apps/client-admin/src/app/Services'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function useGetCategories() {
  const dispatch = useDispatch()
  const { activeShop } = useSelector((store: IStore) => store.shop)

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['categories', { filter: { shopId: activeShop?.id } }],
    queryFn: CategoryService.get,
    cacheTime: 0,
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    if (data && !isLoading) {
      const categories = mapCategoriesData(data?.data?.data || [])

      dispatch(actions.updateCategories(categories))
    }
  }, [data])

  return { data, isLoading, error, refetch }

  function mapCategoriesData(categories: any[]): ICategory[] {
    return categories.map((category: any) => ({
      id: category?.id,
      name: category?.attributes?.name,
      bannerImageName:
        category?.attributes?.bannerImage?.data?.attributes?.name,
      bannerImageUrl:
        process.env.API_DOMAIN?.slice(0, -1) +
        category?.attributes?.bannerImage,
      dateModified: category?.attributes?.updatedAt,
    }))
  }
}
