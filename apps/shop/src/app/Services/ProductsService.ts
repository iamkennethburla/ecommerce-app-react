import { ITablePagination } from '@ecommerce-app/common-components'
import { authAxios } from '@ecommerce-app/common-utils'

export const ProductsService = {
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
    const shopFilterString = `&filters[shop][id][$eq]=${process.env['SHOP_ID']}`
    const featuredFilterString = `&filters[featured][$eq]=${true}`

    return authAxios({
      url: `/products${id}?populate=*${shopFilterString}${featuredFilterString}`,
    })
  },
  put: async function (data: {
    id: number
    name: string
    archived: boolean
    categories: number[]
    featured: boolean
    price: number
    stocks: number
    variants: number[]
  }) {
    const {
      id,
      name,
      archived,
      categories,
      featured,
      price,
      stocks,
      variants,
    } = data

    return authAxios({
      url: `/products/${id}`,
      method: 'PUT',
      data: {
        data: {
          name,
          archived,
          categories,
          featured,
          price,
          stocks,
          variants,
        },
      },
    })
  },
}
