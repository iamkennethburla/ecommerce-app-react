import { useModal } from '@ecommerce-app/admin/src/app/Features/Layout/Hooks'
import {
  CreateShopModal,
  ICreateShopModalProps,
} from '@ecommerce-app/admin/src/app/Features/Shop/Components'

export const useCreateShopModal = () => {
  const { open, close } = useModal<ICreateShopModalProps>({
    component: CreateShopModal,
  })

  return { open, close }
}
