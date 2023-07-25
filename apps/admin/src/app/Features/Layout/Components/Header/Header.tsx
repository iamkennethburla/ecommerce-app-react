import { ShopSelector } from '@ecommerce-app/admin/Features/Shop/Components'
import { Box } from '@mui/material'
import { HeaderMainNav } from '../HeaderMainNav/HeaderMainNav'

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
      <Box>
        <ShopSelector />
      </Box>
      <Box>
        <HeaderMainNav />
      </Box>
    </Box>
  )
}
