import { ITable } from '@ecommerce-app/admin/Components'
import { ICategory } from './ICategory'

export interface ICategoriesStore {
  categories: ICategory[]
  categoriesTable: ITable<ICategory[]>
}
