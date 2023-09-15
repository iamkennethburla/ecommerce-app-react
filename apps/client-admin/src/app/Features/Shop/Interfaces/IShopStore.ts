import { IShop } from './IShop'

export interface IShopStore {
  activeShop: IShop | undefined
  shops: IShop[]
}
