import { Modal } from '@ecommerce-app/common-components'
import { Box } from '@mui/material'
import { IStore } from 'apps/client-shop/src/app/Core/Store'
import { useSelector } from 'react-redux'
import { ImagePreview } from './ImagePreview'
import { ProductDetails } from './ProductDetails'

export interface IPreviewProductModalProps {
  open?: boolean
  onClose?: () => void
}

export function PreviewProductModal(props: IPreviewProductModalProps) {
  const { open = false, onClose } = props
  const { previewProduct } = useSelector((store: IStore) => store.products)
  console.log(previewProduct)
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        style={{
          display: 'flex',
          marginTop: -25,
          width: 500,
          padding: '0px 30px 0px 0px',
          overflow: 'hidden',
        }}
      >
        <Box
          style={{
            width: 200,
          }}
        >
          <ImagePreview
            imageUrl={[
              previewProduct?.imageUrl + '',
              previewProduct?.imageUrl + '',
            ]}
          />
        </Box>
        <Box
          style={{
            flex: 1,
          }}
        >
          {previewProduct ? (
            <ProductDetails
              id={previewProduct?.id}
              name={previewProduct?.name}
              variantIds={previewProduct?.variants.map((variant) => variant.id)}
              price={previewProduct?.price}
            />
          ) : (
            ''
          )}
        </Box>
      </Box>
    </Modal>
  )
}
