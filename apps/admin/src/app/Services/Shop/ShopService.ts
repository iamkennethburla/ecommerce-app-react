import { authAxios } from '@ecommerce-app/admin/Utils'

export const ShopService = {
  get: async function () {
    return [
      {
        id: 1,
        name: 'Store 1',
      },
      {
        id: 2,
        name: 'Store 2',
      },
    ]
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
