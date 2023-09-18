import { Box, Typography } from '@mui/material'
import { IStore } from 'apps/client-shop/src/app/Core/Store'
import { ProductCard } from 'apps/client-shop/src/app/Features/Products/Components'
import { useGetFeaturedProducts } from 'apps/client-shop/src/app/Features/Products/Hooks'
import { IProduct } from 'apps/client-shop/src/app/Features/Products/Interfaces'
import { useSelector } from 'react-redux'

export function FeaturedProducts() {
  useGetFeaturedProducts()
  const { featuredProducts } = useSelector((store: IStore) => store.products)

  return (
    <Box
      style={{
        marginTop: 30,
      }}
    >
      <Typography
        style={{
          fontWeight: 700,
          fontSize: 24,
        }}
      >
        Featured Products
      </Typography>
      <Box
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {featuredProducts.map((product: IProduct, index: number) => (
          <Box
            key={index}
            style={{
              minWidth: 200,
              marginRight: 10,
              marginBottom: 10,
            }}
          >
            <ProductCard
              id={product.id}
              imageUrl={product.imageUrl}
              name={product.name}
              category={product.categories.map((category) => category.name)}
              price={product.price}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}
