import { PageLayout } from '@ecommerce-app/shop/Features/Layout/Components'
import { FeaturedProducts } from '@ecommerce-app/shop/Features/Products/Components'
import { Box, Typography } from '@mui/material'

export default function HomePage() {
  return (
    <PageLayout>
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
          Explore The Featured Collection
        </Typography>
      </Box>
      <FeaturedProducts />
    </PageLayout>
  )
}
