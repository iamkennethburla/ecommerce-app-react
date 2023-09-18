import { Button } from '@ecommerce-app/common-components'
import { IStore } from 'apps/client-admin/src/app/Core/Store'
import { CategoriesTable } from 'apps/client-admin/src/app/Features/Categories/Components'
import { PageLayout } from 'apps/client-admin/src/app/Features/Layout/Components'
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
