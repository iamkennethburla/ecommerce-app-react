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
      url: `/products${id}?populate=*${nameFilterString}${pageFilterString}${pageLimitFilterString}`,
    })
  },
  post: async function (data: {
    name: string
    archived: boolean
    categories: number[]
    featured: boolean
    price: number
    stocks: number
    variants: number[]
  }) {
    const { name, archived, categories, featured, price, stocks, variants } =
      data
    return authAxios({
      url: '/products',
      method: 'POST',
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
  delete: async function (data: { id: number }) {
    const { id } = data

    return authAxios({
      url: `/products/${id}`,
      method: 'DELETE',
    })
  },
}
