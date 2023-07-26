import { Box } from '@mui/material'
import { NavLink } from 'react-router-dom'

export function HeaderMainNav() {
  const menuNavigation = [
    {
      label: 'Dashboard',
      to: '/dashboard',
    },
    {
      label: 'Banners',
      to: '/banners',
    },
    {
      label: 'Categories',
      to: '/categories',
    },
    {
      label: 'Variants',
      to: '/variants',
    },
    {
      label: 'Products',
      to: '/products',
    },
    {
      label: 'Orders',
      to: '/orders',
    },
    {
      label: 'Settings',
      to: '/settings',
    },
  ]

  return (
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {menuNavigation.map((menuItem, index) => (
        <Box
          key={index}
          style={{
            padding: '0px 10px',
          }}
        >
          <NavLink to={menuItem.to}>{menuItem.label}</NavLink>
        </Box>
      ))}
    </Box>
  )
}
