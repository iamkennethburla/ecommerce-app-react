import { ITable } from '@ecommerce-app/common-components'
import { IOrder } from './IOrder'

export interface IOrdersStore {
  ordersTable: ITable<IOrder[]>
}
