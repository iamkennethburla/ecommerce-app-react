import { Header } from '@ecommerce-app/admin/Features/Layout/Components'
import { Box, Typography } from '@mui/material'
import { ReactNode, useEffect } from 'react'

export interface IPageLayoutProps {
  children: React.ReactNode
  pageTitle?: string
  pageHeader?: string
  pageSubtitle?: string
  actionComponent?: ReactNode
  withHeader?: boolean
  withFooter?: boolean
}

export function PageLayout(props: IPageLayoutProps) {
  const {
    children,
    pageTitle,
    pageHeader,
    pageSubtitle,
    actionComponent,
    withHeader = true,
    withFooter = true,
  } = props

  useEffect(() => {
    if (pageTitle) {
      document.title = pageTitle
    } else {
      document.title = 'Admin'
    }
  }, [pageTitle])

  return (
    <Box>
      {withHeader && <Header />}
      <Box
        style={{
          padding: '20px',
        }}
      >
        {pageHeader && (
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
              <Typography>{pageHeader}</Typography>
              {pageSubtitle && <Typography>{pageSubtitle}</Typography>}
            </Box>
            {actionComponent && <Box>{actionComponent}</Box>}
          </Box>
        )}
        {children}
      </Box>
      {withFooter && <></>}
    </Box>
  )
}
