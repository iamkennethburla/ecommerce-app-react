import { ModalProps, Modal as MuiModal } from '@mui/material'

export interface IModalProps extends Omit<ModalProps, 'onClose' | 'title'> {
  open: boolean
  onClose: () => void
}

export function Modal(props: IModalProps) {
  const { open, onClose, children } = props

  return (
    <MuiModal
      open={open}
      onClose={(evt, reason) =>
        reason !== 'backdropClick' ? onClose() : false
      }
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {children}
    </MuiModal>
  )
}
