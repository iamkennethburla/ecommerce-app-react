import { HeaderMainNav } from '@ecommerce-app/shop/Features/Layout/Components'
import { Box } from '@mui/material'

export function Header() {
  return (
    <Box
      style={{
        height: '50px',
        border: '1px solid grey',
        display: 'flex',
        alignItems: 'center',
        padding: '0px 20px',
      }}
    >
      <Box>Logo</Box>
      <Box
        style={{
          flex: 1,
        }}
      >
        <HeaderMainNav />
      </Box>
      <Box>Cart Button</Box>
    </Box>
  )
}
