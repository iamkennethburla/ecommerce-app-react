import { IStore } from '@ecommerce-app/admin/src/app/Core/Store'
import { useGetVariantsTable } from '@ecommerce-app/admin/src/app/Features/Variants/Hooks'
import { Table } from '@ecommerce-app/common-components'
import { Box } from '@mui/material'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { IVariant } from '../../Interfaces'
import { ActionPopup } from './ActionPopup'
import { FilterForm } from './FilterForm'

export function VariantsTable() {
  useGetVariantsTable()
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
      <Box
        style={{
          marginBottom: 20,
        }}
      >
        <FilterForm />
      </Box>
      <Table data={variantsTable.data} columns={columns} />
    </Box>
  )
}
