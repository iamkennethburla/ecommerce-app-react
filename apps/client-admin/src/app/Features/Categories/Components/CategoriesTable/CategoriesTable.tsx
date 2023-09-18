import { Table } from '@ecommerce-app/common-components'
import { Box } from '@mui/material'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { IStore } from 'apps/client-admin/src/app/Core/Store'
import { useGetCategoriesTable } from 'apps/client-admin/src/app/Features/Categories/Hooks'
import { ICategory } from 'apps/client-admin/src/app/Features/Categories/Interfaces'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { ActionPopup } from './ActionPopup'
import { FilterForm } from './FilterForm'

export function CategoriesTable() {
  useGetCategoriesTable()
  const { categoriesTable } = useSelector((store: IStore) => store.categories)
  const columnHelper = createColumnHelper<ICategory>()
  const columns: ColumnDef<ICategory, any>[] = [
    columnHelper.accessor('name', {
      header: 'Name',
      cell: (info) => info.getValue(),
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
      <Table data={categoriesTable.data} columns={columns} />
    </Box>
  )
}
