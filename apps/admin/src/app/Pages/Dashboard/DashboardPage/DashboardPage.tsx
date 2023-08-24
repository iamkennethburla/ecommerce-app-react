import { SummaryMetrics } from '@ecommerce-app/admin/Features/Dashboard/Components'
import { PageLayout } from '@ecommerce-app/admin/Features/Layout/Components'

export default function DashboardPage() {
  return (
    <PageLayout pageTitle="DashboardPage">
      <SummaryMetrics />
    </PageLayout>
  )
}
