import { Button } from '@ecommerce-app/admin/Components'
import { IStore } from '@ecommerce-app/admin/Core/Store'
import {
  useCreateShopModal,
  useGetShops,
  useSelectShop,
} from '@ecommerce-app/admin/Features/Shop/Hooks'
import { IShop } from '@ecommerce-app/admin/Features/Shop/Interfaces'
import { Menu } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { useSelector } from 'react-redux'

export function ShopSelector() {
  useGetShops()
  const { open: showCreateShopModal } = useCreateShopModal()
  const { mutate: selectShop } = useSelectShop()
  const { shops } = useSelector((store: IStore) => store.shop)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {getActiveShop(shops)?.name}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {shops.map((shop: IShop, index: number) => (
          <MenuItem
            key={index}
            onClick={() => {
              selectShop(shop)
              handleClose()
            }}
          >
            {shop.name}
          </MenuItem>
        ))}
        <MenuItem
          key={shops.length}
          onClick={() => {
            handleClose()
            showCreateShopModal()
          }}
        >
          <IoIosAddCircleOutline /> Create Shop
        </MenuItem>
      </Menu>
    </div>
  )

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  function getActiveShop(shops: IShop[]) {
    const currentShop = shops.find((shop: IShop) => shop.active)

    return currentShop
  }
}
