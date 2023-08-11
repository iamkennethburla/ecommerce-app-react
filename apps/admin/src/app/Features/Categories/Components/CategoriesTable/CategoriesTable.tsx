import { Table } from '@ecommerce-app/admin/Components'
import { IStore } from '@ecommerce-app/admin/Core/Store'
import { useGetCategories } from '@ecommerce-app/admin/Features/Categories/Hooks'
import { ICategory } from '@ecommerce-app/admin/Features/Categories/Interfaces'
import moment from 'moment'
import { useSelector } from 'react-redux'

export function CategoriesTable() {
  useGetCategories()
  const { categories } = useSelector((store: IStore) => store.categories)

  const columns = [
    {
      header: 'Name',
      accessorKey: 'name',
    },
    {
      header: 'Date Modified',
      accessorFn: (row: ICategory) =>
        moment(row.dateModified).format('MMM DD, YYYY'),
    },
  ]

  return (
    <div>
      <Table data={categories} columns={columns} />
    </div>
  )
}
