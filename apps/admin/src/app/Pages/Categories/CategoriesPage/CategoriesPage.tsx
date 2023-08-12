import { Button } from '@ecommerce-app/admin/Components'
import { IStore } from '@ecommerce-app/admin/Core/Store'
import { CategoriesTable } from '@ecommerce-app/admin/Features/Categories/Components'
import { PageLayout } from '@ecommerce-app/admin/Features/Layout/Components'
import { Box } from '@mui/material'
import { MdAdd } from 'react-icons/md'
import { useSelector } from 'react-redux'

export default function CategoriesPage() {
  const { categoriesTable } = useSelector((store: IStore) => store.categories)
  return (
    <PageLayout
      pageTitle={`Categories (${categoriesTable.data?.length})`}
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
