import { ITable } from '@ecommerce-app/admin/Components'
import { IVariant } from './IVariant'

export interface IVariantsStore {
  variantsTable: ITable<IVariant[]>
}
