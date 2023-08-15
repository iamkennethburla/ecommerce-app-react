import { ITable } from '@ecommerce-app/admin/Components'
import { IOrder } from './IOrder'

export interface IOrdersStore {
  ordersTable: ITable<IOrder[]>
}
