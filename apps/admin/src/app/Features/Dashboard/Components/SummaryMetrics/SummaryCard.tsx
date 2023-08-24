import { Card } from '@ecommerce-app/admin/Components'
import { Box, Typography } from '@mui/material'
import { ReactNode } from 'react'

export interface ICardProps {
  title?: ReactNode
  icon?: ReactNode
  value?: ReactNode
}

export const SummaryCard = (props: ICardProps) => {
  const { title, icon, value } = props

  return (
    <Box style={{ minWidth: 300, flex: 1, marginLeft: 20 }}>
      <Card
        title={title}
        options={
          <Box
            style={{
              fontSize: 20,
            }}
          >
            {icon}
          </Box>
        }
      >
        <Typography
          style={{
            fontSize: 35,
            fontWeight: 700,
          }}
        >
          {value}
        </Typography>
      </Card>
    </Box>
  )
}
