import { ITablePagination } from '@ecommerce-app/admin/Components'
import { authAxios } from '@ecommerce-app/admin/Utils'

export const VariantsService = {
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
      url: `/variants${id}?populate=*${nameFilterString}${pageFilterString}${pageLimitFilterString}`,
    })
  },
  post: async function (data: {
    name: string
    value?: string
  }) {
    const { name, value } = data
    return authAxios({
      url: '/variants',
      method: 'POST',
      data: {
        data: {
          name,
          value
        },
      },
    })
  },
  put: async function (data: {
    id: number
    name: string
    value: string
  }) {
    const { id, name, value } = data

    return authAxios({
      url: `/variants/${id}`,
      method: 'PUT',
      data: {
        data: {
          name,
          value
        },
      },
    })
  },
  delete: async function (data: { id: number }) {
    const { id } = data

    return authAxios({
      url: `/variants/${id}`,
      method: 'DELETE',
    })
  },
}
