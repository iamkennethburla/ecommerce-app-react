import { Card } from '@ecommerce-app/admin/Components'
import { Box } from '@mui/material'
import { SalesOverviewChart } from '../SalesOverviewChart/SalesOverviewChart'

export const SalesOverview = () => {
  return (
    <Box>
      <Card title="Overview">
        <Box
          style={{
            height: 400,
            padding: '20px 0px 0px 0px',
          }}
        >
          <SalesOverviewChart />
        </Box>
      </Card>
    </Box>
  )
}
