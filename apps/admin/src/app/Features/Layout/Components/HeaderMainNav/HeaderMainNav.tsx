import { Box } from '@mui/material'
import { NavLink } from 'react-router-dom'

export function HeaderMainNav() {
  const menuNavigation = [
    {
      name: 'Dashboard',
      to: '/dashboard',
    },
    {
      name: 'Banners',
      to: '/banners',
    },
    {
      name: 'Categories',
      to: '/categories',
    },
    {
      name: 'Variants',
      to: '/variants',
    },
    {
      name: 'Products',
      to: '/products',
    },
    {
      name: 'Orders',
      to: '/orders',
    },
    {
      name: 'Settings',
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
          <NavLink to={menuItem.to}>{menuItem.name}</NavLink>
        </Box>
      ))}
    </Box>
  )
}
