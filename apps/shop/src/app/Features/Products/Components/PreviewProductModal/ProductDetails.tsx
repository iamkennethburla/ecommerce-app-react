import { Box, Divider, Typography } from '@mui/material'

interface IProductDetailsProps {
  id: number
  name: string
  variantIds: number[]
  price: number
}

export const ProductDetails = (props: IProductDetailsProps) => {
  const { name, variantIds, price } = props

  return (
    <Box
      style={{
        width: '100%',
        padding: '0px 0px 0px 20px',
      }}
    >
      <Typography
        style={{
          fontSize: 22,
          fontWeight: 700,
        }}
      >
        {name}
      </Typography>
      <Typography
        style={{
          marginTop: 10,
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        {price
          ? `$ ${price.toLocaleString('en', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`
          : ''}
      </Typography>
      <Divider
        style={{
          marginTop: 10,
        }}
      />
    </Box>
  )
}
