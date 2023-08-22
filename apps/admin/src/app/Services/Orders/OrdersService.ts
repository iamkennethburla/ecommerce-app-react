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
      url: `/orders${id}?populate=*${nameFilterString}${pageFilterString}${pageLimitFilterString}`,
    })
  },
}
