import { StyledEngineProvider } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import React from 'react'

interface AppThemeProviderInterface {
  children: React.ReactNode
}

function MuiThemeProvider(props: AppThemeProviderInterface) {
  const { children } = props

  const theme = createTheme({})

  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
    </ThemeProvider>
  )
}

export default MuiThemeProvider
