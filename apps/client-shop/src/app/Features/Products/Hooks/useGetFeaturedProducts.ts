import { useQuery } from '@tanstack/react-query'
import { IProduct } from 'apps/client-shop/src/app/Features/Products/Interfaces'
import { actions } from 'apps/client-shop/src/app/Features/Products/Store'
import { ProductsService } from 'apps/client-shop/src/app/Services'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export function useGetFeaturedProducts() {
  const dispatch = useDispatch()

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['featured-products', { filter: { featured: true } }],
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
      imageUrl:
        'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    }))
  }
}
