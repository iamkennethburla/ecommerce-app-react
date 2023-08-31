import { useModal } from '@ecommerce-app/shop/Features/Layout/Hooks'
import {
  IPreviewProductModalProps,
  PreviewProductModal,
} from '@ecommerce-app/shop/Features/Products/Components'

export const usePreviewProductModal = () => {
  const { open, close } = useModal<IPreviewProductModalProps>({
    component: PreviewProductModal,
  })

  return { open, close }
}
