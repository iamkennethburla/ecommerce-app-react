import { authAxios } from '@ecommerce-app/common-utils'

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
    return authAxios({
      url: '/shops',
    })
  },
  post: async function (params: IShopServicePost) {
    const { name, active } = params

    return authAxios({
      url: '/shops',
      method: 'POST',
      data: {
        data: {
          name,
          active: active ? true : false,
        },
      },
    })
  },
  put: async function (params: IShopServicePut) {
    const { id, name, active } = params

    return authAxios({
      url: `/shops/${id}`,
      method: 'PUT',
      data: {
        data: {
          name,
          active,
        },
      },
    })
  },
}
