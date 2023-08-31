import { ICategory } from '@ecommerce-app/shop/Features/Categories/Interfaces'
import { actions } from '@ecommerce-app/shop/Features/Categories/Store'
import { CategoryService } from '@ecommerce-app/shop/Services'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export function useGetCategories() {
  const dispatch = useDispatch()

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['categories', {}],
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
        category?.attributes?.bannerImage?.data?.attributes?.url,
      dateModified: category?.attributes?.updatedAt,
    }))
  }
}
