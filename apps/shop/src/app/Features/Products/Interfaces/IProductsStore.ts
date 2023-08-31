import { IProduct } from './IProduct'

export interface IProductsStore {
  featuredProducts: IProduct[]
  previewProduct?: IProduct
}
