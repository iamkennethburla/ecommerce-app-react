import { IStore } from '@ecommerce-app/shop/Core/Store'
import { ProductCard } from '@ecommerce-app/shop/Features/Products/Components'
import { useGetCategoryProducts } from '@ecommerce-app/shop/Features/Products/Hooks'
import { IProduct } from '@ecommerce-app/shop/Features/Products/Interfaces'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FilterSection } from './FilterSection'

export const CategoryProducts = () => {
  const params = useParams()

  useGetCategoryProducts({
    categoryId: Number(params?.categoryId),
  })

  const { categoryProducts } = useSelector((store: IStore) => store.products)

  return (
    <Box
      style={{
        width: '100%',
        marginTop: 30,
      }}
    >
      <Box
        style={{
          display: 'flex',
        }}
      >
        <Box
          style={{
            width: 200,
            marginRight: 30,
          }}
        >
          <FilterSection />
        </Box>
        <Box
          style={{
            flex: 1,
          }}
        >
          <Box
            style={{
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            {categoryProducts.map((product: IProduct, index: number) => (
              <Box
                key={index}
                style={{
                  overflow: 'hidden',
                  border: '1px solid lightgrey',
                  borderRadius: 10,
                  minWidth: 250,
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
      </Box>
    </Box>
  )
}
