import { Box, Typography } from '@mui/material'
import { IStore } from 'apps/client-shop/src/app/Core/Store'
import { HeaderMainNav } from 'apps/client-shop/src/app/Features/Layout/Components'
import { useGetShop } from 'apps/client-shop/src/app/Features/Shop/Hooks'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export function Header() {
  useGetShop()
  const { currentShop } = useSelector((store: IStore) => store.shop)

  return (
    <Box
      style={{
        height: '50px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
        display: 'flex',
        alignItems: 'center',
        padding: '0px 20px',
      }}
    >
      <Box>
        <NavLink to="/">
          <Typography
            style={{
              fontWeight: 600,
              fontSize: 18,
              marginRight: 20,
            }}
          >
            {currentShop?.name}
          </Typography>
        </NavLink>
      </Box>
      <Box
        style={{
          flex: 1,
        }}
      >
        <HeaderMainNav />
      </Box>
      <Box>
        <Box
          style={{
            cursor: 'pointer',
            height: '30px',
            width: '55px',
            backgroundColor: '#333',
            borderRadius: '20px',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FaShoppingCart
            style={{
              color: 'white',
            }}
          />
          <Typography
            style={{
              fontSize: 14,
              marginLeft: 5,
            }}
          >
            0
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
