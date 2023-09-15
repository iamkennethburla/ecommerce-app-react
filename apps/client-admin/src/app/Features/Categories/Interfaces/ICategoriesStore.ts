import { ITable } from '@ecommerce-app/common-components'
import { ICategory } from './ICategory'

export interface ICategoriesStore {
  categories: ICategory[]
  categoriesTable: ITable<ICategory[]>
}
