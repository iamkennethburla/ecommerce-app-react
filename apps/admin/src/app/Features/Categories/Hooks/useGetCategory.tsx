import { IStore } from '@ecommerce-app/admin/Core/Store'
import { ICategory } from '@ecommerce-app/admin/Features/Categories/Interfaces'
import { actions } from '@ecommerce-app/admin/Features/Categories/Store'
import { CategoryService } from '@ecommerce-app/admin/Services'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export interface ICategoriesFilter {
  name?: string
}

export interface IUseGetCategoryProps {
  id: number
}

export function useGetCategory(props: IUseGetCategoryProps) {
  const { id } = props
  const dispatch = useDispatch()
  const { categoriesTable } = useSelector((store: IStore) => store.categories)

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [
      'categories',
      {
        params: {
          id,
        },
      },
    ],
    queryFn: CategoryService.get,
    // cacheTime: 0,
    enabled: false,
    refetchOnWindowFocus: false,
  })

  const categoriesFilter = useMemo(
    () => categoriesTable?.filter,
    [categoriesTable?.filter]
  )
  const categoriesPagination = useMemo(
    () => categoriesTable?.pagination,
    [categoriesTable?.pagination]
  )

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
  }, [data, dispatch, isLoading])

  useEffect(() => {
    refetch()
  }, [categoriesFilter, categoriesPagination])

  return { data, isLoading, error, refetch }

  function mapCategoriesData(categories: any[]): ICategory[] {
    return categories.map((category: any) => ({
      id: category?.id,
      name: category?.attributes?.name,
      bannerImageName: category?.attributes?.bannerUrl?.data?.attributes?.name,
      bannerImageUrl:
        process.env.API_DOMAIN?.slice(0, -1) +
        category?.attributes?.bannerUrl?.data?.attributes?.url,
      dateModified: category?.attributes?.updatedAt,
    }))
  }
}
