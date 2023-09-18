import { Button, Menu, MenuItem } from '@ecommerce-app/common-components'
import { useLogout } from 'apps/client-admin/src/app/Features/Auth/Hooks'
import { useState } from 'react'

export function ProfileDropdown() {
  const { logout } = useLogout()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  return (
    <div>
      <Button
        aria-controls={open ? 'profile-dropdown' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Profile
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          key={1}
          onClick={() => {
            logout()
            handleClose()
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  )

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget)
  }
  function handleClose() {
    setAnchorEl(null)
  }
}
