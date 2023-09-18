import { Box } from '@mui/material'
import { IStore } from 'apps/client-shop/src/app/Core/Store'
import { ProductCard } from 'apps/client-shop/src/app/Features/Products/Components'
import { useGetCategoryProducts } from 'apps/client-shop/src/app/Features/Products/Hooks'
import { IProduct } from 'apps/client-shop/src/app/Features/Products/Interfaces'
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
