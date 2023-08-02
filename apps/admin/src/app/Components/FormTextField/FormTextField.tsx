import styled from '@emotion/styled'
import { BaseTextFieldProps, TextField, Typography } from '@mui/material'
import { forwardRef } from 'react'

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    height: 35px;
  }
`

export interface IFormTextField
  extends Omit<BaseTextFieldProps, 'label' | 'error'> {
  label?: string
  error?: string | undefined
}

export const FormTextField = forwardRef((props: IFormTextField, ref: any) => {
  const { label, error, ...rest } = props

  return (
    <div>
      <Typography>{label}</Typography>
      <StyledTextField {...rest} ref={ref} />
      {error && <Typography>{error}</Typography>}
    </div>
  )
})
