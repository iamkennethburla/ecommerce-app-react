import { CreateCategoryForm } from '@ecommerce-app/admin/src/app/Features/Categories/Components'
import { PageLayout } from '@ecommerce-app/admin/src/app/Features/Layout/Components'

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
