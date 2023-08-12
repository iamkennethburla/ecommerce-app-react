import { Table } from '@ecommerce-app/admin/Components'
import { IStore } from '@ecommerce-app/admin/Core/Store'
import { useGetCategories } from '@ecommerce-app/admin/Features/Categories/Hooks'
import { ICategory } from '@ecommerce-app/admin/Features/Categories/Interfaces'
import { Box } from '@mui/material'
import { createColumnHelper } from '@tanstack/react-table'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { ActionPopup } from './ActionPopup'
import { FilterForm } from './FilterForm'

export function CategoriesTable() {
  const dispatch = useDispatch()
  useGetCategories()
  const { categoriesTable } = useSelector((store: IStore) => store.categories)
  const columnHelper = createColumnHelper<ICategory>()
  const columns = [
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
          <ActionPopup id={props.row.id} />
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
      <Table data={categoriesTable.data} columns={columns} />
    </Box>
  )
}
