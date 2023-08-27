import { Typography } from '@mui/material'
import { ReactNode } from 'react'

export interface IFormLabelProps {
  children: ReactNode | string
}

export const FormLabel = (props: IFormLabelProps) => {
  const { children } = props

  return <Typography>{children}</Typography>
}
