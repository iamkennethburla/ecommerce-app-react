import { IStore } from '@ecommerce-app/admin/Core/Store'
import { PageLayout } from '@ecommerce-app/admin/Features/Layout/Components'
import { OrdersTable } from '@ecommerce-app/admin/Features/Orders/Components'
import { useSelector } from 'react-redux'

export default function OrdersPage() {
  const { ordersTable } = useSelector((store: IStore) => store.orders)
  return (
    <PageLayout
      pageTitle={`Orders (${ordersTable.data.length})`}
      pageSubtitle="View list of orders"
    >
      <OrdersTable />
    </PageLayout>
  )
}
