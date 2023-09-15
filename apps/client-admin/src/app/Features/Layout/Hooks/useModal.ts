import { ModalContext } from '@ecommerce-app/common-core'
import { FunctionComponent, useContext } from 'react'

export interface IUseModalProps<IModalProps = any> {
  component: string | FunctionComponent<IModalProps>
  props?: IModalProps
}

export function useModal<IModalProps>(props: IUseModalProps<IModalProps>) {
  const { component, ...rest } = props
  const { showModal, hideModal } = useContext(ModalContext)

  return { open, close: hideModal }

  function open() {
    showModal(component, rest.props)
  }
}
