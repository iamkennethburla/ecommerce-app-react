export interface IProduct {
  id: number
  name: string
  price: number
  stocks: number
  categories: IValues[]
  colors: IValues[]
  sizes: IValues[]
  featured: boolean
  archived: boolean
  dateModified: string
}

type IValues = {
  id: number
  name: string
}
