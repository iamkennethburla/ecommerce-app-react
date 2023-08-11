import { authAxios } from '@ecommerce-app/admin/Utils'

export const CategoryService = {
  get: async function () {
    return authAxios({
      url: '/categories?populate=*',
    })
  },
  post: async function (params: { name: string; bannerUrl?: File }) {
    const { name, bannerUrl } = params

    return authAxios({
      url: '/categories',
      method: 'POST',
      data: {
        data: {
          name,
          bannerUrl,
        },
      },
    })
  },
  put: async function (params: { id: number; name: string; bannerUrl?: File }) {
    const { id, name, bannerUrl } = params

    return authAxios({
      url: `/categories/${id}`,
      method: 'PUT',
      data: {
        data: {
          name,
          bannerUrl,
        },
      },
    })
  },
}
