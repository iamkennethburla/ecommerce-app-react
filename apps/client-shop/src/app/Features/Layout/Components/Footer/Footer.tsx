import { Box, Typography } from '@mui/material'

export const Footer = () => {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        height: 40,
      }}
    >
      <Typography
        style={{
          fontSize: 12,
        }}
      >
        All rights reserved 2023
      </Typography>
    </Box>
  )
}
