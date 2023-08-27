import { ITable } from '@ecommerce-app/common-components'
import { IProduct } from './IProduct'

export interface IProductsStore {
  productsTable: ITable<IProduct[]>
}
