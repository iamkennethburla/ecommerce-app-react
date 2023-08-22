import { Button } from '@ecommerce-app/admin/Components'
import { IStore } from '@ecommerce-app/admin/Core/Store'
import { PageLayout } from '@ecommerce-app/admin/Features/Layout/Components'
import { ProductsTable } from '@ecommerce-app/admin/Features/Products/Components'
import { MdAdd } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function ProductsPage() {
  const { productsTable } = useSelector((store: IStore) => store.products)
  return (
    <PageLayout
      pageTitle={`Products (${productsTable.data.length})`}
      pageSubtitle="View list of products"
      actionComponent={
        <NavLink to="/products/create">
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
      <ProductsTable />
    </PageLayout>
  )
}
