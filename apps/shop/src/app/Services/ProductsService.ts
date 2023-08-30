import { ITablePagination } from '@ecommerce-app/common-components'
import { publicAxios } from '@ecommerce-app/common-utils'

export interface IProductServiceGet {
  queryKey: [
    string,
    {
      params?: { id: number }
      filter?: { name?: string; shopId?: number }
      pagination?: ITablePagination
    }
  ]
}

export const ProductsService = {
  get: async function ({ queryKey }: IProductServiceGet) {
    const [_, { params }] = queryKey

    const id = params?.id || '' ? `/${params?.id}` : ''
    const shopFilterString = `&filters[shop][id][$eq]=${process.env['SHOP_ID']}`

    return publicAxios({
      url: `/products${id}?populate=*${shopFilterString}`,
    })
  },
}
