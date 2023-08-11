import { StyledEngineProvider } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import React from 'react'

interface AppThemeProviderInterface {
  children: React.ReactNode
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true
    sm: true
    md: true
    lg: true
    xl: true
    verySmall: true
    mobileSmall: true
    mobileMedium: true
    mobile: true
    tabletPortrait: true
    tabletLandscape: true
    laptop: true
    laptopMedium: true
    laptopLarge: true
    bigDesktop: true
    bigDesktopUp: true
    wideScreen: true
  }
}

export function MuiThemeProvider(props: AppThemeProviderInterface) {
  const { children } = props

  const theme = createTheme({
    palette: {
      primary: {
        main: '#333',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
        verySmall: 320,
        mobileSmall: 430,
        mobileMedium: 500,
        mobile: 600,
        tabletPortrait: 768,
        tabletLandscape: 920,
        laptop: 1024,
        laptopMedium: 1200,
        laptopLarge: 1320,
        bigDesktop: 1600,
        bigDesktopUp: 1900,
        wideScreen: 4000,
      },
    },
    typography: {
      fontFamily:
        'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
    </ThemeProvider>
  )
}
