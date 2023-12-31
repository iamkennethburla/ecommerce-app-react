import { useQuery } from '@tanstack/react-query'
import { IStore } from 'apps/client-admin/src/app/Core/Store'
import { IProduct } from 'apps/client-admin/src/app/Features/Products/Interfaces'
import { actions } from 'apps/client-admin/src/app/Features/Products/Store'
import { ProductsService } from 'apps/client-admin/src/app/Services'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function useGetProductsTable() {
  const dispatch = useDispatch()

  const { activeShop } = useSelector((store: IStore) => store.shop)
  const { productsTable } = useSelector((store: IStore) => store.products)

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['products-table', { filter: { shopId: activeShop?.id } }],
    queryFn: ProductsService.get,
    cacheTime: 0,
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    if (data && !isLoading) {
      const products = mapProductsData(data?.data?.data || [])
      const pagination = data?.data?.meta?.pagination

      dispatch(
        actions.updateProductsTable({
          ...productsTable,
          data: products,
          pagination,
        })
      )
    }
  }, [data])

  return { data, isLoading, error, refetch }

  function mapProductsData(products: any[]): IProduct[] {
    return products.map((product: any) => ({
      id: product?.id,
      name: product?.attributes?.name,
      stocks: Number(product?.attributes?.stocks),
      price: product?.attributes?.price,
      featured: product?.attributes?.featured,
      archived: product?.attributes?.archived,
      categories: product?.attributes?.categories?.data?.map(
        (category: any) => ({
          id: category?.id,
          name: category?.attributes?.name,
        })
      ),
      colors: product?.attributes?.colors?.data?.map((color: any) => ({
        id: color?.id,
        name: color?.attributes?.name,
      })),
      sizes: product?.attributes?.sizes?.data?.map((size: any) => ({
        id: size?.id,
        name: size?.attributes?.name,
      })),
      dateModified: product?.attributes?.updatedAt,
      values: product?.attributes?.values?.map((value: any) => value?.value),
    }))
  }
}
