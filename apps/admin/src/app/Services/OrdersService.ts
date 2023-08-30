import { ITablePagination } from '@ecommerce-app/common-components'
import { authAxios } from '@ecommerce-app/common-utils'

export interface IOrdersServiceGet {
  queryKey: [
    string,
    {
      params?: { id: number }
      filter?: { name?: string; shopId?: number }
      pagination?: ITablePagination
    }
  ]
}

export const OrdersService = {
  get: async function ({ queryKey }: IOrdersServiceGet) {
    const [_, { params, filter, pagination }] = queryKey

    const id = params?.id || '' ? `/${params?.id}` : ''
    const shopFilterString = `&filters[shop][id][$eq]=${filter?.shopId}`

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
      url: `/orders${id}?populate=*${shopFilterString}`,
    })
  },
}
