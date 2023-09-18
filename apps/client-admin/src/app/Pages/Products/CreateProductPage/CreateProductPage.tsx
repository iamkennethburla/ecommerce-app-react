import { PageLayout } from 'apps/client-admin/src/app/Features/Layout/Components'
import { CreateProductForm } from 'apps/client-admin/src/app/Features/Products/Components'

export default function CreateProductPage() {
  return (
    <PageLayout
      pageTitle="Products | Create"
      pageHeader={`Create Product`}
      pageSubtitle="Add new product for your shop"
    >
      <CreateProductForm />
    </PageLayout>
  )
}
