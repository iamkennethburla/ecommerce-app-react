import { IProduct } from '@ecommerce-app/shop/Features/Products/Interfaces'
import { actions } from '@ecommerce-app/shop/Features/Products/Store'
import { ProductsService } from '@ecommerce-app/shop/Services'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export function useGetFeaturedProducts() {
  const dispatch = useDispatch()

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['featured-products', {}],
    queryFn: ProductsService.get,
    cacheTime: 0,
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    if (data && !isLoading) {
      const products = mapProductsData(data?.data?.data || [])

      dispatch(actions.updateFeaturedProducts(products))
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
