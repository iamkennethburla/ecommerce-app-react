import { Button } from '@ecommerce-app/common-components'
import { IStore } from 'apps/client-admin/src/app/Core/Store'
import { PageLayout } from 'apps/client-admin/src/app/Features/Layout/Components'
import { VariantsTable } from 'apps/client-admin/src/app/Features/Variants/Components'
import { MdAdd } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function VariantsPage() {
  const { variantsTable } = useSelector((store: IStore) => store.variants)
  return (
    <PageLayout
      pageTitle="Variants"
      pageHeader={`Variant (${variantsTable.data.length})`}
      pageSubtitle="View list of variants"
      actionComponent={
        <NavLink to="/variants/create">
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
      <VariantsTable />
    </PageLayout>
  )
}
