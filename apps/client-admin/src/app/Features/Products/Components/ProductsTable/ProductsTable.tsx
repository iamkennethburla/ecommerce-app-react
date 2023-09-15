import { IStore } from '@ecommerce-app/admin/src/app/Core/Store'
import { useGetProductsTable } from '@ecommerce-app/admin/src/app/Features/Products/Hooks'
import { Table } from '@ecommerce-app/common-components'
import { Box } from '@mui/material'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { IProduct, IProductCategory, IProductVariant } from '../../Interfaces'
import { ActionPopup } from './ActionPopup'
import { FilterForm } from './FilterForm'

export function ProductsTable() {
  useGetProductsTable()
  const { productsTable } = useSelector((store: IStore) => store.products)
  const columnHelper = createColumnHelper<IProduct>()
  const columns: ColumnDef<IProduct, any>[] = [
    columnHelper.accessor('name', {
      header: 'Name',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('stocks', {
      header: 'Stocks',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('price', {
      header: 'Price',
      cell: (info) => `P${info.getValue()}`,
    }),
    columnHelper.accessor('categories', {
      header: 'Categories',
      cell: (info) =>
        info
          .getValue()
          .map((category: IProductCategory) => category?.name)
          .join(', '),
    }),
    columnHelper.accessor('variants', {
      header: 'Variants',
      cell: (info) =>
        info
          .getValue()
          .map((variant: IProductVariant) => variant?.name)
          .join(', '),
    }),
    columnHelper.accessor('dateModified', {
      header: 'Date Modified',
      cell: (info) => moment(info.getValue()).format('MMM DD, YYYY'),
    }),
    columnHelper.accessor('featured', {
      header: 'Featured',
      cell: (info) => (info.getValue() ? 'Yes' : 'No'),
    }),
    columnHelper.accessor('archived', {
      header: 'Archived',
      cell: (info) => (info.getValue() ? 'Yes' : 'No'),
    }),
    columnHelper.display({
      id: 'action',
      cell: (props) => (
        <Box>
          <ActionPopup id={props.row.original.id} />
        </Box>
      ),
      meta: {
        width: 20,
      },
    }),
  ]

  return (
    <Box>
      <Box
        style={{
          marginBottom: 20,
        }}
      >
        <FilterForm />
      </Box>
      <Table data={productsTable.data} columns={columns} />
    </Box>
  )
}
