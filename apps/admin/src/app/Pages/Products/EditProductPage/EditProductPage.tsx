import { PageLayout } from '@ecommerce-app/admin/Features/Layout/Components'
import { EditProductForm } from '@ecommerce-app/admin/Features/Products/Components'

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
