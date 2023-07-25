import { Header } from '@ecommerce-app/admin/Features/Layout/Components'
import { Box, Typography } from '@mui/material'

export interface IPageLayoutProps {
  children: React.ReactNode
  pageTitle?: string
  pageSubtitle?: string
}

export function PageLayout(props: IPageLayoutProps) {
  const { children, pageTitle, pageSubtitle } = props

  return (
    <div>
      <Header />
      <Box
        style={{
          padding: '20px',
        }}
      >
        {pageTitle && (
          <>
            <Typography>{pageTitle}</Typography>
            <Typography>{pageSubtitle}</Typography>
          </>
        )}
        {children}
      </Box>
    </div>
  )
}
