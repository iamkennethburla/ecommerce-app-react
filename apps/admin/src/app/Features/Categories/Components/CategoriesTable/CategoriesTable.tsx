import { Table } from '@ecommerce-app/admin/Components'
import { IStore } from '@ecommerce-app/admin/Core/Store'
import { useGetCategories } from '@ecommerce-app/admin/Features/Categories/Hooks'
import { useSelector } from 'react-redux'

export function CategoriesTable() {
  useGetCategories()
  const { categories } = useSelector((store: IStore) => store.categories)

  const columns = [
    {
      header: 'Name',
      accessor: 'name',
    },
  ]

  return (
    <div>
      <Table data={categories} columns={columns} />
    </div>
  )
}
