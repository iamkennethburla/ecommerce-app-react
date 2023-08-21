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
    values: { id: number; value: string }[]
  }) {
    const { name, values } = data
    return authAxios({
      url: '/variants',
      method: 'POST',
      data: {
        data: {
          name,
          values,
        },
      },
    })
  },
  put: async function (data: {
    id: number
    name: string
    values: { id: number; value: string }[]
  }) {
    const { id, name, values } = data

    return authAxios({
      url: `/variants/${id}`,
      method: 'PUT',
      data: {
        data: {
          name,
          values: values.map((value) => ({ value: value?.value })),
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
