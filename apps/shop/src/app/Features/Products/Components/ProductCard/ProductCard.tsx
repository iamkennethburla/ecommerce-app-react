import { usePreviewProductModal } from '@ecommerce-app/shop/Features/Products/Hooks'
import { actions } from '@ecommerce-app/shop/Features/Products/Store'
import { Box, Typography, styled } from '@mui/material'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdZoomOutMap } from 'react-icons/md'
import { useDispatch } from 'react-redux'

const ActionButtonContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  width: '100%',
  zIndex: 10,
  opacity: 0,
  transitionDuration: '.2s',
  '&:hover': {
    opacity: 1,
  },
}))

const ActionButton = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'white',
  borderRadius: '50%',
  width: 40,
  height: 40,
  cursor: 'pointer',
  ':nth-of-type(2)': {
    marginLeft: 20,
  },
}))

export interface IProductCardProps {
  id: number
  imageUrl: string
  name: string
  category: string[]
  price: number
}

export const ProductCard = (props: IProductCardProps) => {
  const { id, imageUrl, name, category, price } = props
  const dispatch = useDispatch()

  const { open: showCreateShopModal } = usePreviewProductModal()

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
        <ActionButtonContainer>
          <ActionButton
            onClick={() => {
              dispatch(actions.setPreviewProduct(id))
              showCreateShopModal()
            }}
          >
            <MdZoomOutMap
              style={{
                color: '#444',
                fontSize: 20,
              }}
            />
          </ActionButton>
          <ActionButton>
            <AiOutlineShoppingCart
              style={{
                color: '#444',
                fontSize: 20,
              }}
            />
          </ActionButton>
        </ActionButtonContainer>
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
