import { IProduct } from '@ecommerce-app/admin/Features/Products/Interfaces'
import { IStore } from '@ecommerce-app/shop/Core/Store'
import { ProductCard } from '@ecommerce-app/shop/Features/Products/Components'
import { useGetFeaturedProducts } from '@ecommerce-app/shop/Features/Products/Hooks'
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
          marginTop: 20,
          marginLeft: -20,
          width: 'calc(100% + 20px)',
        }}
      >
        {featuredProducts.map((product: IProduct, index: number) => (
          <Box
            key={index}
            style={{
              overflow: 'hidden',
              border: '1px solid lightgrey',
              borderRadius: 10,
              marginLeft: 20,
            }}
          >
            <ProductCard
              id={product.id}
              imageUrl={
                'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
              }
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
