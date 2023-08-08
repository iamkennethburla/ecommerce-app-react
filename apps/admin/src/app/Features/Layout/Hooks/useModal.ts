import { ModalContext } from '@ecommerce-app/admin/Providers'
import { FunctionComponent, useContext } from 'react'

export interface IUseModalProps<IModalProps = any> {
  component: string | FunctionComponent<IModalProps>
  props: IModalProps
}

export function useModal<IModalProps>(props: IUseModalProps<IModalProps>) {
  const { component, ...rest } = props
  const { showModal, hideModal } = useContext(ModalContext)

  return { open, close }

  function open() {
    showModal(component, rest.props)
  }

  function close() {
    hideModal()
  }
}
