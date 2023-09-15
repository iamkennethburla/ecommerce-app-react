import { PageLayout } from '@ecommerce-app/admin/Features/Layout/Components'
import { CreateProductForm } from '@ecommerce-app/admin/Features/Products/Components'

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
