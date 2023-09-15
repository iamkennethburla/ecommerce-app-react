import { IProduct } from './IProduct'

export interface IProductsStore {
  featuredProducts: IProduct[]
  categoryProducts: IProduct[]
  previewProduct?: IProduct
}
