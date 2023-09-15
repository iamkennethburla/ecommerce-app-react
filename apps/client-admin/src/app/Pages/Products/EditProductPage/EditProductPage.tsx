import { PageLayout } from '@ecommerce-app/admin/src/app/Features/Layout/Components'
import { EditProductForm } from '@ecommerce-app/admin/src/app/Features/Products/Components'

export default function EditProductPage() {
  return (
    <PageLayout
      pageTitle="Products | Edit"
      pageHeader={`Edit Product`}
      pageSubtitle="Update product details"
    >
      <EditProductForm />
    </PageLayout>
  )
}
