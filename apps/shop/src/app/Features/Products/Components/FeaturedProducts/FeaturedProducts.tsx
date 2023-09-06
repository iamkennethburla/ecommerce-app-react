import { IStore } from '@ecommerce-app/shop/Core/Store'
import { ProductCard } from '@ecommerce-app/shop/Features/Products/Components'
import { useGetFeaturedProducts } from '@ecommerce-app/shop/Features/Products/Hooks'
import { IProduct } from '@ecommerce-app/shop/Features/Products/Interfaces'
import { Box, Typography } from '@mui/material'
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
