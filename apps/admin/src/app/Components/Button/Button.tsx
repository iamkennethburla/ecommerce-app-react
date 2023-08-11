import { ButtonProps, Button as MuiButton } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledButton = styled(MuiButton)(({ theme }) => ({
  '& .MuiButton-startIcon': {
    marginRight: 5,
  },
}))

export function Button(props: ButtonProps) {
  const { children, ...rest } = props
  return <StyledButton {...rest}>{children}</StyledButton>
}
