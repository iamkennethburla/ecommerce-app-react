import styled from '@emotion/styled'
import { Box, TextField, TextFieldProps, Typography } from '@mui/material'
import { forwardRef } from 'react'

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    height: 35px;
  }
`

export interface IFormTextField
  extends Omit<TextFieldProps, 'label' | 'error'> {
  label?: string
  error?: string | undefined
}

export const FormTextField = forwardRef((props: IFormTextField, ref: any) => {
  const { label, error, ...rest } = props

  return (
    <div>
      <Typography>{label}</Typography>
      <StyledTextField
        {...rest}
        InputLabelProps={{ shrink: false }}
        ref={ref}
      />
      <Box
        style={{
          height: 15,
        }}
      >
        {error && (
          <Typography
            style={{
              color: 'red',
              fontSize: 12,
            }}
          >
            {error}
          </Typography>
        )}
      </Box>
    </div>
  )
})
