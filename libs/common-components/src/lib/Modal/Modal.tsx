import { useModal } from '@ecommerce-app/admin/Features/Layout/Hooks'
import { Close } from '@mui/icons-material'
import { Box, Dialog, DialogProps, Typography } from '@mui/material'
import { ReactNode } from 'react'

export interface IModalProps extends Omit<DialogProps, 'onClose' | 'title'> {
  open: boolean
  title?: ReactNode
  onClose?: () => void
}

export function Modal(props: IModalProps) {
  const { open, onClose = () => null, title, children } = props
  const { close: closeModal } = useModal({
    component: '',
  })

  return (
    <Dialog
      open={open}
      onClose={(evt, reason) =>
        reason !== 'backdropClick' ? handleCloseModal() : false
      }
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px',
        }}
      >
        <Typography>{title}</Typography>
        <Box
          style={{
            cursor: 'pointer',
            zIndex: 10,
          }}
          onClick={() => {
            handleCloseModal()
          }}
        >
          <Close style={{ fontSize: 18 }} />
        </Box>
      </Box>
      <Box
        style={{
          padding: '0px 10px 10px 10px',
        }}
      >
        {children}
      </Box>
    </Dialog>
  )

  function handleCloseModal() {
    onClose()
    closeModal()
  }
}
