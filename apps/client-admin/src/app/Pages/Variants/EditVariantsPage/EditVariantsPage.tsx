import { PageLayout } from '@ecommerce-app/admin/Features/Layout/Components'
import { EditVariantForm } from '@ecommerce-app/admin/Features/Variants/Components'

export default function EditVariantsPage() {
  return (
    <PageLayout
      pageTitle="Variants | Edit"
      pageHeader={`Edit Variant`}
      pageSubtitle="Update variant details"
    >
      <EditVariantForm />
    </PageLayout>
  )
}
