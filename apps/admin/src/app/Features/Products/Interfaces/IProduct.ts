export interface IProduct {
  id: number
  name: string
  price: number
  stocks: number
  categories: IProductCategory[]
  variants: IProductVariant[]
  featured: boolean
  archived: boolean
  dateModified: string
}

export type IProductCategory = {
  id: number
  name: string
}

export type IProductVariant = {
  id: number
  name: string
}
