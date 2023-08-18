import { Table } from '@ecommerce-app/admin/Components'
import { IStore } from '@ecommerce-app/admin/Core/Store'
import { useGetVariants } from '@ecommerce-app/admin/Features/Variants/Hooks'
import { Box } from '@mui/material'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { IVariant } from '../../Interfaces'
import { ActionPopup } from './ActionPopup'
import { FilterForm } from './FilterForm'

export function VariantsTable() {
  useGetVariants()
  const { variantsTable } = useSelector((store: IStore) => store.variants)
  const columnHelper = createColumnHelper<IVariant>()
  const columns: ColumnDef<IVariant, any>[] = [
    columnHelper.accessor('name', {
      header: 'Name',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('values', {
      header: 'Values',
      cell: (info) => info.getValue().join(', '),
    }),
    columnHelper.accessor('dateModified', {
      header: 'Date Modified',
      cell: (info) => moment(info.getValue()).format('MMM DD, YYYY'),
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
      <FilterForm />
      <Table data={variantsTable.data} columns={columns} />
    </Box>
  )
}