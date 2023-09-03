import { IStore } from '@ecommerce-app/shop/Core/Store'
import { ProductCard } from '@ecommerce-app/shop/Features/Products/Components'
import { useGetFeaturedProducts } from '@ecommerce-app/shop/Features/Products/Hooks'
import { IProduct } from '@ecommerce-app/shop/Features/Products/Interfaces'
import { Box, Grid, Typography } from '@mui/material'
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
      <Grid
        container
        style={{
          marginTop: 20,
        }}
        spacing={2}
      >
        {featuredProducts.map((product: IProduct, index: number) => (
          <Grid key={index} item md={2}>
            <ProductCard
              id={product.id}
              imageUrl={product.imageUrl}
              name={product.name}
              category={product.categories.map((category) => category.name)}
              price={product.price}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
