import { FormErrorMessage, FormLabel } from '@ecommerce-app/admin/Components'
import { Box } from '@mui/material'

export interface IFormInputWrapperProps {
  label?: string
  error?: string | undefined
  children: React.ReactNode
  width?: string | string
}

export const FormInputWrapper = (props: IFormInputWrapperProps) => {
  const { label, error, children, width = '100%' } = props

  return (
    <Box
      style={{
        width,
      }}
    >
      {label && <FormLabel>{label}</FormLabel>}
      {children}
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </Box>
  )
}
