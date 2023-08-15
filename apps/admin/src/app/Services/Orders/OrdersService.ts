import { ITablePagination } from '@ecommerce-app/admin/Components'
import { authAxios } from '@ecommerce-app/admin/Utils'

export const OrdersService = {
  get: async function ({
    queryKey,
  }: {
    queryKey: [
      string,
      {
        params?: { id: number }
        filter?: { name?: string }
        pagination?: ITablePagination
      }
    ]
  }) {
    const [_, { params, filter, pagination }] = queryKey

    const id = params?.id || '' ? `/${params?.id}` : ''
    const nameFilterString = filter?.name
      ? `&filters[name][$contains]=${filter?.name}`
      : ''
    const pageFilterString = pagination?.page
      ? `&pagination[page]=${pagination?.page}`
      : ''
    const pageLimitFilterString = pagination?.pageSize
      ? `&pagination[pageSize]=${pagination?.pageSize}`
      : ''

    return authAxios({
      url: `/categories${id}?populate=*${nameFilterString}${pageFilterString}${pageLimitFilterString}`,
    })
  },
  post: async function (data: {
    name: string
    bannerImage?: File
    bannerName?: string
  }) {
    const { name, bannerImage, bannerName } = data
    return authAxios({
      url: '/categories',
      method: 'POST',
      data: {
        data: {
          name,
          bannerImage,
          bannerName,
        },
      },
    })
  },
  put: async function (data: {
    id: number
    name: string
    bannerImage?: File
    bannerName?: string
  }) {
    const { id, name, bannerImage, bannerName } = data

    return authAxios({
      url: `/categories/${id}`,
      method: 'PUT',
      data: {
        data: {
          name,
          bannerImage,
          bannerName,
        },
      },
    })
  },
  delete: async function (data: { id: number }) {
    const { id } = data

    return authAxios({
      url: `/categories/${id}`,
      method: 'DELETE',
    })
  },
}
