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
  put: async function (params: { id: number; name: string; active: boolean }) {
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
