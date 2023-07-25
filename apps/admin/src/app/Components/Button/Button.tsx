import { ButtonBase, ButtonBaseProps } from '@mui/material'

export default function Button(props: ButtonBaseProps) {
  const { children, ...rest } = props
  return <ButtonBase {...rest}>{children}</ButtonBase>
}
