import { publicAxios } from '@ecommerce-app/common-utils'

export interface IShopServicePost {
  name: string
  active?: boolean
}
export interface IShopServicePut {
  id: number
  name: string
  active: boolean
}

export const ShopService = {
  get: async function () {
    const id = process.env['SHOP_ID'] || '' ? `/${process.env['SHOP_ID']}` : ''

    return publicAxios({
      url: `/shops${id}`,
    })
  },
}
