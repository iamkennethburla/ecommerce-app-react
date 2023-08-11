import { ProfileDropdown } from '@ecommerce-app/admin/Features/Auth/Components'
import { HeaderMainNav } from '@ecommerce-app/admin/Features/Layout/Components'
import { ShopSelector } from '@ecommerce-app/admin/Features/Shop/Components'
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
      <Box>
        <ShopSelector />
      </Box>
      <Box
        style={{
          flex: 1,
        }}
      >
        <HeaderMainNav />
      </Box>
      <Box>
        <ProfileDropdown />
      </Box>
    </Box>
  )
}
