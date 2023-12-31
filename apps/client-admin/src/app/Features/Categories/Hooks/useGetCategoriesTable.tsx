import { useQuery } from '@tanstack/react-query'
import { IStore } from 'apps/client-admin/src/app/Core/Store'
import { ICategory } from 'apps/client-admin/src/app/Features/Categories/Interfaces'
import { actions } from 'apps/client-admin/src/app/Features/Categories/Store'
import { CategoryService } from 'apps/client-admin/src/app/Services'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export interface ICategoriesFilter {
  name?: string
}

export function useGetCategoriesTable() {
  const dispatch = useDispatch()
  const { activeShop } = useSelector((store: IStore) => store.shop)
  const { categoriesTable } = useSelector((store: IStore) => store.categories)

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['categories-table', { filter: { shopId: activeShop?.id } }],
    queryFn: CategoryService.get,
    cacheTime: 0,
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    if (data && !isLoading) {
      const categories = mapCategoriesData(data?.data?.data || [])
      const pagination = data?.data?.meta?.pagination

      dispatch(
        actions.updateCategoriesTable({
          ...categoriesTable,
          data: categories,
          pagination,
        })
      )
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
