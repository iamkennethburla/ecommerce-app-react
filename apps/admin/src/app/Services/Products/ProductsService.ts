import { ITablePagination } from '@ecommerce-app/admin/Components'
import { authAxios } from '@ecommerce-app/admin/Utils'

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
    values: { id: number; value: string }[]
  }) {
    const { name, values } = data
    return authAxios({
      url: '/products',
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
    archived: boolean
    categories: any[]
    featured: boolean
    price: number
    stocks: number
    variants: any[]
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
