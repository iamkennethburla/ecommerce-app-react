import { Box, Typography } from '@mui/material'
import { IStore } from 'apps/client-shop/src/app/Core/Store'
import { ICategory } from 'apps/client-shop/src/app/Features/Categories/Interfaces'
import { PageLayout } from 'apps/client-shop/src/app/Features/Layout/Components'
import { CategoryProducts } from 'apps/client-shop/src/app/Features/Products/Components'
import { useGetVariants } from 'apps/client-shop/src/app/Features/Variants/Hooks'
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
