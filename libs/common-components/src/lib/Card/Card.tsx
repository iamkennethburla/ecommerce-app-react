import { Box, Typography } from '@mui/material'
import { ReactNode } from 'react'

export interface ICardProps {
  title?: ReactNode
  options?: ReactNode
  children?: ReactNode
}

export const Card = (props: ICardProps) => {
  const { title, options, children } = props

  return (
    <Box
      style={{
        border: '1px solid lightgrey',
        borderRadius: 10,
        width: 'auto',
        padding: 20,
      }}
    >
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          {title && (
            <Typography
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: '#444',
              }}
            >
              {title}
            </Typography>
          )}
        </Box>
        <Box>{options}</Box>
      </Box>
      <Box
        style={{
          width: '100%',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
