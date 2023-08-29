import { Header } from '@ecommerce-app/shop/Features/Layout/Components'
import { Box, Typography } from '@mui/material'
import { ReactNode } from 'react'

export interface IPageLayoutProps {
  children: React.ReactNode
  pageTitle?: string
  pageSubtitle?: string
  actionComponent?: ReactNode
}

export function PageLayout(props: IPageLayoutProps) {
  const { children, pageTitle, pageSubtitle, actionComponent } = props

  return (
    <div>
      <Header />
      <Box
        style={{
          padding: '20px',
        }}
      >
        {pageTitle && (
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '10px',
              marginBottom: '20px',
              borderBottom: '1px solid lightgrey',
            }}
          >
            <Box>
              <Typography>{pageTitle}</Typography>
              {pageSubtitle && <Typography>{pageSubtitle}</Typography>}
            </Box>
            {actionComponent && <Box>{actionComponent}</Box>}
          </Box>
        )}
        {children}
      </Box>
    </div>
  )
}
