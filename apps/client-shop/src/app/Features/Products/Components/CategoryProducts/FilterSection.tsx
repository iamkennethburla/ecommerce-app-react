import { IStore } from '@ecommerce-app/shop/Core/Store'
import { IProduct } from '@ecommerce-app/shop/Features/Products/Interfaces'
import { IVariant } from '@ecommerce-app/shop/Features/Variants/Interfaces'
import { Box, Divider, Typography } from '@mui/material'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'

export const FilterSection = () => {
  const { categoryProducts } = useSelector((store: IStore) => store.products)
  const { variants } = useSelector((store: IStore) => store.variants)

  const categoryVariants: IVariant[] = useMemo(() => {
    return filterCategoryVariants(categoryProducts, variants)
  }, [categoryProducts, variants])

  return (
    <Box
      style={{
        width: '100%',
      }}
    >
      {categoryVariants.map((variant, index) => (
        <Box
          key={index}
          style={{
            marginBottom: 20,
          }}
        >
          <Typography
            style={{
              fontWeight: 'bold',
              marginBottom: 20,
            }}
          >
            {variant.name}
          </Typography>
          <Divider />
          <Box
            style={{
              display: 'flex',
              padding: '20px 0px',
            }}
          >
            {variant.values.map((value, index) => (
              <Box
                key={index}
                style={{
                  cursor: 'pointer',
                  padding: '3px 5px',
                  borderRadius: 5,
                  marginRight: 5,
                  border: '1px solid lightgrey',
                }}
              >
                <Typography
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  {value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  )

  function filterCategoryVariants(products: IProduct[], variants: IVariant[]) {
    let variantIds: number[] = []

    products.map((product) =>
      product.variants.map((variant) => variantIds.push(variant.id))
    )

    variantIds = [...new Set(variantIds)]

    return variants.filter((variant) => variantIds.includes(variant.id))
  }
}
