import { ITable } from '@ecommerce-app/admin/Components'
import { IVariant } from './IVariant'

export interface IVariantsStore {
  variants: IVariant[]
  variantsTable: ITable<IVariant[]>
}
