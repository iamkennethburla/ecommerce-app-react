import { authAxios } from '@ecommerce-app/common-utils'

export const ShopService = {
  get: async function () {
    return authAxios({
      url: '/shops',
    })
  },
  post: async function (params: { name: string; active?: boolean }) {
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
