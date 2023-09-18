import { useModal } from 'apps/client-shop/src/app/Features/Layout/Hooks'
import {
  IPreviewProductModalProps,
  PreviewProductModal,
} from 'apps/client-shop/src/app/Features/Products/Components'

export const usePreviewProductModal = () => {
  const { open, close } = useModal<IPreviewProductModalProps>({
    component: PreviewProductModal,
  })

  return { open, close }
}
