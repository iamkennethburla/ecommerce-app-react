import { Box } from '@mui/material'
import {
  SalesOverview,
  SummaryMetrics,
} from 'apps/client-admin/src/app/Features/Dashboard/Components'
import { PageLayout } from 'apps/client-admin/src/app/Features/Layout/Components'

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
