import { Button } from '@ecommerce-app/admin/Components'
import { CategoriesTable } from '@ecommerce-app/admin/Features/Categories/Components'
import { PageLayout } from '@ecommerce-app/admin/Features/Layout/Components'
import { Box } from '@mui/material'
import { MdAdd } from 'react-icons/md'

export default function CategoriesPage() {
  return (
    <PageLayout
      pageTitle="Categories"
      pageSubtitle="Manage categories for your store"
      actionComponent={
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
      }
    >
      <Box
        style={{
          padding: '20px 0px',
        }}
      >
        <CategoriesTable />
      </Box>
    </PageLayout>
  )
}
