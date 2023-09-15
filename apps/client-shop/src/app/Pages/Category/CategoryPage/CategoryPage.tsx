import { IStore } from '@ecommerce-app/shop/Core/Store'
import { ICategory } from '@ecommerce-app/shop/Features/Categories/Interfaces'
import { PageLayout } from '@ecommerce-app/shop/Features/Layout/Components'
import { CategoryProducts } from '@ecommerce-app/shop/Features/Products/Components'
import { useGetVariants } from '@ecommerce-app/shop/Features/Variants/Hooks'
import { Box, Typography } from '@mui/material'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function CategoryPage() {
  useGetVariants()
  const params = useParams()

  const { categories } = useSelector((store: IStore) => store.categories)

  const currentCategory = useMemo(
    () => findCategory(params?.categoryId, categories),
    [categories, params?.categoryId]
  )

  return (
    <PageLayout pageTitle={`Category | ${currentCategory?.name}`}>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 300,
          backgroundSize: 'cover',
          backgroundImage: 'url( "https://picsum.photos/seed/picsum/1080/300")',
          borderRadius: 20,
        }}
      >
        <Typography
          style={{
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          {currentCategory?.bannerImageName}
        </Typography>
      </Box>
      <CategoryProducts />
    </PageLayout>
  )

  function findCategory(id: string | undefined, categories: ICategory[]) {
    if (id === undefined) return undefined
    if (isNaN(Number(id))) return undefined

    return categories.find((category: ICategory) => category.id === Number(id))
  }
}
