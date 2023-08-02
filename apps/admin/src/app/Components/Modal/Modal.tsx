import { Dialog, DialogProps } from '@mui/material'

export interface IModalProps extends Omit<DialogProps, 'onClose' | 'title'> {
  open: boolean
  onClose: () => void
}

export function Modal(props: IModalProps) {
  const { open, onClose, children } = props

  return (
    <Dialog
      open={open}
      onClose={(evt, reason) =>
        reason !== 'backdropClick' ? onClose() : false
      }
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {children}
    </Dialog>
  )
}
