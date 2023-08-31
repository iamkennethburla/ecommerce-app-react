import { Box, Typography } from '@mui/material'

export interface IProductCardProps {
  id: number
  imageUrl: string
  name: string
  category: string[]
  price: number
}

export const ProductCard = (props: IProductCardProps) => {
  const { id, imageUrl, name, category, price } = props

  return (
    <Box>
      <Box
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: 250,
          height: 200,
        }}
      >
        <img
          style={{
            position: 'absolute',
            top: -20,
            width: '100%',
          }}
          alt="product"
          src={imageUrl}
        />
      </Box>
      <Box
        style={{
          padding: 10,
        }}
      >
        <Typography
          style={{
            fontSize: 16,
            fontWeight: 700,
          }}
        >
          {name}
        </Typography>
        <Typography
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: '#888',
          }}
        >
          {category.join(', ')}
        </Typography>
        <Typography
          style={{
            marginTop: 10,
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          $ {price.toFixed(2)}
        </Typography>
      </Box>
    </Box>
  )
}
