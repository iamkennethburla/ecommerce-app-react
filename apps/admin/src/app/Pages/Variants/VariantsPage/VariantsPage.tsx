import { IStore } from '@ecommerce-app/admin/Core/Store'
import { PageLayout } from '@ecommerce-app/admin/Features/Layout/Components'
import { VariantsTable } from '@ecommerce-app/admin/Features/Variants/Components'
import { Button } from '@ecommerce-app/common-components'
import { MdAdd } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function VariantsPage() {
  const { variantsTable } = useSelector((store: IStore) => store.variants)
  return (
    <PageLayout
      pageTitle={`Variant (${variantsTable.data.length})`}
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
