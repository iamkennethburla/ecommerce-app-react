import { EditCategoryForm } from '@ecommerce-app/admin/Features/Categories/Components'
import { PageLayout } from '@ecommerce-app/admin/Features/Layout/Components'

export default function EditCategoriesPage() {
  return (
    <PageLayout
      pageTitle="Categories | Edit"
      pageHeader={`Edit Category`}
      pageSubtitle="Update category details"
    >
      <EditCategoryForm />
    </PageLayout>
  )
}
