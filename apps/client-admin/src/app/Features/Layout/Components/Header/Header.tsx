import { ProfileDropdown } from '@ecommerce-app/admin/src/app/Features/Auth/Components'
import { HeaderMainNav } from '@ecommerce-app/admin/src/app/Features/Layout/Components'
import { ShopSelector } from '@ecommerce-app/admin/src/app/Features/Shop/Components'
import { Box } from '@mui/material'

export function Header() {
  return (
    <Box
      style={{
        height: '50px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
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
