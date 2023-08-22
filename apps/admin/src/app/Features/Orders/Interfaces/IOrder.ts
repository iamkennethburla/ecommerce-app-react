export interface IOrder {
  id: number
  productNames: string[]
  customerName: string
  phone: string
  address: string
  price: number
  paid: boolean
  dateModified: string
}
