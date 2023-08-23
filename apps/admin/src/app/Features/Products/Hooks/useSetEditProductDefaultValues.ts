import { IStore } from '@ecommerce-app/admin/Core/Store'
import { useGetCategories } from '@ecommerce-app/admin/Features/Categories/Hooks'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useGetProductsTable } from '../Hooks'
import { IProduct } from '../Interfaces'

export const useSetEditProductDefaultValues = (setValue: any) => {
  const params = useParams()
  useGetProductsTable()
  useGetCategories()
  const { productsTable } = useSelector((store: IStore) => store.products)
  const { variants } = useSelector((store: IStore) => store.variants)
  const { categories } = useSelector((store: IStore) => store.categories)

  useEffect(() => {
    const selectedProduct = findProduct(params?.id, productsTable.data)

    if (selectedProduct && selectedProduct !== undefined) {
      const selectedCategories = selectedProduct?.categories?.map(
        (category: { id: number; name: string }) => ({
          value: category.id,
          name: category.name,
        })
      )
      const selectedVariants = selectedProduct?.variants?.map(
        (variant: { id: number; name: string }) => ({
          value: variant.id,
          name: variant.name,
        })
      )

      setValue('id', selectedProduct?.id)
      setValue('name', selectedProduct?.name)
      setValue('price', selectedProduct?.price)
      setValue('stocks', selectedProduct?.stocks)
      setValue('featured', selectedProduct?.featured)
      setValue('archived', selectedProduct?.archived)
      setValue('categories', selectedCategories)
      setValue('variants', selectedVariants)
    }
  }, [setValue, params?.id, productsTable.data, categories, variants])

  return {}

  function findProduct(id: string | undefined, products: IProduct[]) {
    if (id === undefined) return undefined
    if (isNaN(Number(id))) return undefined

    return products.find((category: IProduct) => category.id === Number(id))
  }
}
