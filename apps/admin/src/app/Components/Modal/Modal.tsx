import { Close } from '@mui/icons-material'
import { Box, Dialog, DialogProps, Typography } from '@mui/material'
import { ReactNode, useState } from 'react'

export interface IModalProps extends Omit<DialogProps, 'onClose' | 'title'> {
  open: boolean
  title?: ReactNode
  onClose?: () => void
}

export function Modal(props: IModalProps) {
  const { open, onClose = () => null, title, children } = props
  const [openModal, setOpenModal] = useState(open)

  return (
    <Dialog
      open={openModal}
      onClose={(evt, reason) =>
        reason !== 'backdropClick' ? onClose() : false
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
          }}
          onClick={() => {
            setOpenModal(false)
            onClose()
          }}
        >
          <Close style={{ fontSize: 16 }} />
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
}
