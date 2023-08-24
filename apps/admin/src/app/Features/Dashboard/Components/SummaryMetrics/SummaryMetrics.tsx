import { Box } from '@mui/material'
import { BsBoxSeam, BsCreditCard, BsCurrencyDollar } from 'react-icons/bs'
import { SummaryCard } from './SummaryCard'

export const SummaryMetrics = () => {
  return (
    <Box
      style={{
        display: 'flex',
        marginLeft: -20,
        width: 'calc(100% + 20px)',
      }}
    >
      <SummaryCard
        title="Total Revenue"
        icon={<BsCurrencyDollar fontSize="inherit" />}
        value={'$59.00'}
      />
      <SummaryCard
        title="Sales"
        icon={<BsCreditCard fontSize="inherit" />}
        value={'+1'}
      />
      <SummaryCard
        title="Products In Stock"
        icon={<BsBoxSeam fontSize="inherit" />}
        value={7}
      />
    </Box>
  )
}
