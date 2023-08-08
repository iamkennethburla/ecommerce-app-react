import { authAxios } from '@ecommerce-app/admin/Utils'

export const ShopService = {
  get: async function () {
    return authAxios({
      url: '/shops',
    })
  },
  post: async function (params: { name: string }) {
    const { name } = params

    return authAxios({
      url: '/shops',
      method: 'POST',
      data: {
        data: {
          name,
          active: false,
        },
      },
    })
  },
}
