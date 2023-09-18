import { Box, Typography } from '@mui/material'
import { IStore } from 'apps/client-shop/src/app/Core/Store'
import {
  Footer,
  Header,
} from 'apps/client-shop/src/app/Features/Layout/Components'
import { ReactNode, useEffect } from 'react'
import { useSelector } from 'react-redux'

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

  const { currentShop } = useSelector((store: IStore) => store.shop)

  useEffect(() => {
    if (pageTitle) {
      document.title = pageTitle
    } else {
      document.title = currentShop?.name || ''
    }
  }, [pageTitle, currentShop?.name])

  return (
    <Box>
      {withHeader && <Header />}
      <Box
        style={{
          padding: '20px',
          margin: '20px 0px 100px 0px',
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
      {withFooter && <Footer />}
    </Box>
  )
}
