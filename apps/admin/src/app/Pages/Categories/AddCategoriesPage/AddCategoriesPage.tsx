import { CreateCategoryForm } from '@ecommerce-app/admin/Features/Categories/Components'
import { PageLayout } from '@ecommerce-app/admin/Features/Layout/Components'

export default function AddCategoriesPage() {
  return (
    <PageLayout
      pageTitle={`Create Category`}
      pageSubtitle="Add new category for your products"
    >
      <CreateCategoryForm />
    </PageLayout>
  )
}
