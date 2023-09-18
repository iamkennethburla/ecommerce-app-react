import { PageLayout } from 'apps/client-admin/src/app/Features/Layout/Components'
import { EditProductForm } from 'apps/client-admin/src/app/Features/Products/Components'

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
