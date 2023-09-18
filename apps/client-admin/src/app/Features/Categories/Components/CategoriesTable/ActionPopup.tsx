import { Menu, MenuItem } from '@ecommerce-app/common-components'
import { Box } from '@mui/material'
import { useDeleteCategory } from 'apps/client-admin/src/app/Features/Categories/Hooks'
import { useState } from 'react'
import { MdMoreVert } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

export interface IActionPopupProps {
  id: number
}

export function ActionPopup(props: IActionPopupProps) {
  const { id } = props
  const navigate = useNavigate()
  const { mutate } = useDeleteCategory()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  return (
    <Box>
      <Box style={{ cursor: 'pointer' }} onClick={handleClick}>
        <MdMoreVert />
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableAutoFocusItem
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem
          key={1}
          onClick={() => {
            handleEdit(id)
          }}
        >
          Edit
        </MenuItem>
        <MenuItem
          key={2}
          onClick={() => {
            handleDelete(id)
          }}
        >
          Delete
        </MenuItem>
      </Menu>
    </Box>
  )

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  function handleEdit(id: number | string) {
    navigate(`/categories/edit/${id}`)
  }

  function handleDelete(id: number) {
    mutate({ id })
    handleClose()
  }
}
