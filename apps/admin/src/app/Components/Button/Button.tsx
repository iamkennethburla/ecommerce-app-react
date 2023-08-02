import styled from '@emotion/styled'
import { ButtonProps, Button as MuiButton } from '@mui/material'

const StyledButton = styled(MuiButton)``

export function Button(props: ButtonProps) {
  const { children, ...rest } = props
  return <StyledButton {...rest}>{children}</StyledButton>
}
