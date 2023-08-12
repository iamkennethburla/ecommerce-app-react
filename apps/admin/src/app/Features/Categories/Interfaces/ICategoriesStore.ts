import { ITable } from '@ecommerce-app/admin/Components'
import { ICategory } from './ICategory'

export interface ICategoriesStore {
  categoriesTable: ITable<ICategory[]>
}
