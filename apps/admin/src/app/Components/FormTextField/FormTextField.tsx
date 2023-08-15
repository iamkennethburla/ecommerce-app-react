import { FormErrorMessage } from '@ecommerce-app/admin/Components'
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
      <StyledTextField ref={ref} {...rest} />
      <Box
        style={{
          paddingBottom: 10,
        }}
      >
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </Box>
    </div>
  )
})
