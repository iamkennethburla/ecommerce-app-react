export interface IOrder {
  id: number
  products: OrderProductType[]
  customerName: string
  phone: string
  address: string
  price: number
  paid: boolean
  dateModified: string
}

export type OrderProductType = {
  id: number
  name: string
}
