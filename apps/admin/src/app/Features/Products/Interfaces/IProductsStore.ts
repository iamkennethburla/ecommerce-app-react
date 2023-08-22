import { ITable } from '@ecommerce-app/admin/Components'
import { IProduct } from './IProduct'

export interface IProductsStore {
  productsTable: ITable<IProduct[]>
}
