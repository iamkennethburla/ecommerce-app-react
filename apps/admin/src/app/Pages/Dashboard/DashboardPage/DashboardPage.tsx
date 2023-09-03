import {
  SalesOverview,
  SummaryMetrics,
} from '@ecommerce-app/admin/Features/Dashboard/Components'
import { PageLayout } from '@ecommerce-app/admin/Features/Layout/Components'
import { Box } from '@mui/material'

export default function DashboardPage() {
  return (
    <PageLayout pageTitle="Dashboard" pageHeader="DashboardPage">
      <Box
        style={{
          marginBottom: 20,
        }}
      >
        <SummaryMetrics />
      </Box>
      <SalesOverview />
    </PageLayout>
  )
}
