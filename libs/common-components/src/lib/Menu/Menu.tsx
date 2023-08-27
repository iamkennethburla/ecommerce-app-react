import { MenuProps, Menu as MuiMenu, styled } from '@mui/material'

const StyledMuiMenu = styled(MuiMenu)(() => ({
  '& .MuiList-root': {
    padding: '4px 0px',
  },
}))

export const Menu = (props: MenuProps) => {
  return <StyledMuiMenu {...props} />
}
