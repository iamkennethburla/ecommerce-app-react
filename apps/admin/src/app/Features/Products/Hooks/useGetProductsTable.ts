import { IStore } from '@ecommerce-app/admin/Core/Store'
import { IProduct } from '@ecommerce-app/admin/Features/Products/Interfaces'
import { actions } from '@ecommerce-app/admin/Features/Products/Store'
import { ProductsService } from '@ecommerce-app/admin/Services'
import { useQuery } from '@tanstack/react-query'
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
      variants: product?.attributes?.variants?.data?.map((variant: any) => ({
        id: variant?.id,
        name: variant?.attributes?.name,
      })),
      dateModified: product?.attributes?.updatedAt,
      values: product?.attributes?.values?.map((value: any) => value?.value),
    }))
  }
}
