import { useModal } from '@ecommerce-app/admin/Features/Layout/Hooks'
import {
  CreateShopModal,
  ICreateShopModalProps,
} from '@ecommerce-app/admin/Features/Shop/Components'

export const useCreateShopModal = () => {
  const { open } = useModal<ICreateShopModalProps>({
    component: CreateShopModal,
    props: {
      onClose: () => null,
    },
  })
  return { open }
}
