import { IStore } from 'apps/client-admin/src/app/Core/Store'
import { PageLayout } from 'apps/client-admin/src/app/Features/Layout/Components'
import { OrdersTable } from 'apps/client-admin/src/app/Features/Orders/Components'
import { useSelector } from 'react-redux'

export default function OrdersPage() {
  const { ordersTable } = useSelector((store: IStore) => store.orders)
  return (
    <PageLayout
      pageTitle="Orders"
      pageHeader={`Orders (${ordersTable.data.length})`}
      pageSubtitle="View list of orders"
    >
      <OrdersTable />
    </PageLayout>
  )
}
