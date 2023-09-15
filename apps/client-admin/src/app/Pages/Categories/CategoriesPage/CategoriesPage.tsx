import { IStore } from '@ecommerce-app/admin/Core/Store'
import { CategoriesTable } from '@ecommerce-app/admin/Features/Categories/Components'
import { PageLayout } from '@ecommerce-app/admin/Features/Layout/Components'
import { Button } from '@ecommerce-app/common-components'
import { MdAdd } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function CategoriesPage() {
  const { categoriesTable } = useSelector((store: IStore) => store.categories)
  return (
    <PageLayout
      pageTitle="Categories"
      pageHeader={`Categories (${categoriesTable.data?.length})`}
      pageSubtitle="Manage categories for your store"
      actionComponent={
        <NavLink to="/categories/create">
          <Button
            startIcon={
              <MdAdd
                style={{
                  padding: 0,
                }}
              />
            }
            variant="contained"
            size="small"
          >
            Add New
          </Button>
        </NavLink>
      }
    >
      <CategoriesTable />
    </PageLayout>
  )
}
