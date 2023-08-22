import { Table } from '@ecommerce-app/admin/Components'
import { IStore } from '@ecommerce-app/admin/Core/Store'
import { useGetOrdersTable } from '@ecommerce-app/admin/Features/Orders/Hooks'
import { Box } from '@mui/material'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { IOrder } from '../../Interfaces'
import { FilterForm } from './FilterForm'

export function OrdersTable() {
  useGetOrdersTable()
  const { ordersTable } = useSelector((store: IStore) => store.orders)
  const columnHelper = createColumnHelper<IOrder>()
  const columns: ColumnDef<IOrder, any>[] = [
    columnHelper.accessor('productNames', {
      header: 'products',
      cell: (info) => info.getValue().join(', '),
    }),
    columnHelper.accessor('customerName', {
      header: 'Customer Name',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('price', {
      header: 'Price',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('address', {
      header: 'Address',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('phone', {
      header: 'Phone #',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('dateModified', {
      header: 'Date',
      cell: (info) => moment(info.getValue()).format('MMM DD, YYYY'),
    }),
    columnHelper.accessor('paid', {
      header: 'Paid',
      cell: (info) => (info.getValue() ? 'Yes' : 'No'),
    }),
  ]

  return (
    <Box>
      <FilterForm />
      <Table data={ordersTable.data} columns={columns} />
    </Box>
  )
}