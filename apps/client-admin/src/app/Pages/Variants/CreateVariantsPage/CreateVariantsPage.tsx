import { PageLayout } from '@ecommerce-app/admin/src/app/Features/Layout/Components'
import { CreateVariantForm } from '@ecommerce-app/admin/src/app/Features/Variants/Components'

export default function CreateVariantsPage() {
  return (
    <PageLayout
      pageTitle="Variants | Create"
      pageHeader={`Create Variant`}
      pageSubtitle="Add new variant for your products"
    >
      <CreateVariantForm />
    </PageLayout>
  )
}
