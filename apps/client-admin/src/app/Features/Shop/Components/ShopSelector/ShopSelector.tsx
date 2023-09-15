import { IStore } from '@ecommerce-app/admin/src/app/Core/Store'
import {
  useCreateShopModal,
  useGetShops,
  useSelectShop,
} from '@ecommerce-app/admin/src/app/Features/Shop/Hooks'
import { IShop } from '@ecommerce-app/admin/src/app/Features/Shop/Interfaces'
import { Button, Menu, MenuItem } from '@ecommerce-app/common-components'
import { useState } from 'react'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { useSelector } from 'react-redux'

export function ShopSelector() {
  useGetShops()
  const { open: showCreateShopModal } = useCreateShopModal()
  const { mutate: selectShop } = useSelectShop()
  const { shops, activeShop } = useSelector((store: IStore) => store.shop)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  return (
    <div>
      {shops.length > 0 ? (
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          {activeShop?.name}
        </Button>
      ) : (
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={() => {
            handleClose()
            showCreateShopModal()
          }}
        >
          <IoIosAddCircleOutline style={{ marginRight: 5 }} /> Create Shop
        </Button>
      )}
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
          <IoIosAddCircleOutline style={{ marginRight: 5 }} /> Create Shop
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
}
