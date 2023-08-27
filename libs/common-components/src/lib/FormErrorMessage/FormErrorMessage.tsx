import { Typography } from '@mui/material'
import { ReactNode } from 'react'

export interface IFormErrorMessageProps {
  children: ReactNode | string
}

export const FormErrorMessage = (props: IFormErrorMessageProps) => {
  const { children } = props

  return (
    <Typography
      style={{
        color: 'red',
        fontSize: 12,
      }}
    >
      {children}
    </Typography>
  )
}
