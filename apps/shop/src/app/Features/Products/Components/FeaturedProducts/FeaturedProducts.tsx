import { IStore } from '@ecommerce-app/shop/Core/Store'
import { useGetFeaturedProducts } from '@ecommerce-app/shop/Features/Products/Hooks'
import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

export function FeaturedProducts() {
  useGetFeaturedProducts()
  const { featuredProducts } = useSelector((store: IStore) => store.products)

  return (
    <Box>
      <Typography
        style={{
          fontWeight: 700,
          fontSize: 18,
        }}
      >
        Featured Products
      </Typography>
    </Box>
  )
}
