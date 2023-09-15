import { Modal } from '@ecommerce-app/common-components'
import { CreateShopForm } from './CreateShopForm'

export interface ICreateShopModalProps {
  open?: boolean
  onClose?: () => void
}

export function CreateShopModal(props: ICreateShopModalProps) {
  const { open = false, onClose } = props

  return (
    <Modal open={open} title="Create Shop" onClose={onClose}>
      <div
        style={{
          width: 300,
        }}
      >
        <CreateShopForm />
      </div>
    </Modal>
  )
}
