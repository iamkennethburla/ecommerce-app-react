import { Box, Typography } from '@mui/material'
import { PageLayout } from 'apps/client-shop/src/app/Features/Layout/Components'
import { FeaturedProducts } from 'apps/client-shop/src/app/Features/Products/Components'

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
