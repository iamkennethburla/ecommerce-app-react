import { EditCategoryForm } from 'apps/client-admin/src/app/Features/Categories/Components'
import { PageLayout } from 'apps/client-admin/src/app/Features/Layout/Components'

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
