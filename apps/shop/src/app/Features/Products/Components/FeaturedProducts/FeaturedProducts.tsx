import { IStore } from '@ecommerce-app/shop/Core/Store'
import { useGetFeaturedProducts } from '@ecommerce-app/shop/Features/Products/Hooks'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'

export function FeaturedProducts() {
  useGetFeaturedProducts()
  const { featuredProducts } = useSelector((store: IStore) => store.products)
  console.log(featuredProducts)
  return (
    <Box>
      <Box
        style={{
          marginBottom: 20,
        }}
      ></Box>
    </Box>
  )
}
