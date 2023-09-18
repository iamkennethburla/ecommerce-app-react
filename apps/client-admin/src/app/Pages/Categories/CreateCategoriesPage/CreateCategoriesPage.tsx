import { CreateCategoryForm } from 'apps/client-admin/src/app/Features/Categories/Components'
import { PageLayout } from 'apps/client-admin/src/app/Features/Layout/Components'

export default function CreateCategoriesPage() {
  return (
    <PageLayout
      pageTitle="Categories | Create"
      pageHeader={`Create Category`}
      pageSubtitle="Add new category for your products"
    >
      <CreateCategoryForm />
    </PageLayout>
  )
}
