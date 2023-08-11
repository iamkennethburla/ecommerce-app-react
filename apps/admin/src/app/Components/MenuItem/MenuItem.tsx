import { MenuItemProps, MenuItem as MuiMenuItem, styled } from '@mui/material'

const StyledMuiMenu = styled(MuiMenuItem)(() => ({
  fontSize: 14,
}))

export const MenuItem = (props: MenuItemProps) => {
  return <StyledMuiMenu {...props} />
}
