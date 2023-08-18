import { Button } from '@ecommerce-app/admin/Components'
import { PageLayout } from '@ecommerce-app/admin/Features/Layout/Components'
import { VariantsTable } from '@ecommerce-app/admin/Features/Variants/Components'
import { MdAdd } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

export default function VariantsPage() {
  return (
    <PageLayout
      pageTitle="Variant"
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
