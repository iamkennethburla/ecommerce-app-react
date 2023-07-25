import StoreDropdown from '@ecommerce-app/admin/Features/Store/StoreDropdown/StoreDropdown'
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
        <StoreDropdown />
      </Box>
      <Box>
        <HeaderMainNav />
      </Box>
    </Box>
  )
}
