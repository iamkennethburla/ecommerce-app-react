import { Box } from '@mui/material'
import { IStore } from 'apps/client-shop/src/app/Core/Store'
import { useGetCategories } from 'apps/client-shop/src/app/Features/Categories/Hooks/useGetCategories'
import { ICategory } from 'apps/client-shop/src/app/Features/Categories/Interfaces'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export function HeaderMainNav() {
  useGetCategories()
  const { categories } = useSelector((store: IStore) => store.categories)

  const menuNavigation = categories.map((category: ICategory) => ({
    label: category.name,
    to: `/category/${category.id}`,
  }))

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
