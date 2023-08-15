import { PageLayout } from '@ecommerce-app/admin/Features/Layout/Components'
import { SettingsForm } from '@ecommerce-app/admin/Features/Settings/Components'

export default function OrdersPage() {
  return (
    <PageLayout pageTitle="Orders" pageSubtitle="View list of orders">
      <SettingsForm />
    </PageLayout>
  )
}
