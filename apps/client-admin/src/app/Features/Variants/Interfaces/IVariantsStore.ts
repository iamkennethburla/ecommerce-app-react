import { ITable } from '@ecommerce-app/common-components'
import { IVariant } from './IVariant'

export interface IVariantsStore {
  variants: IVariant[]
  variantsTable: ITable<IVariant[]>
}
