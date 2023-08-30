import { ITablePagination } from '@ecommerce-app/common-components'
import { authAxios } from '@ecommerce-app/common-utils'

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

export interface IProductServicePost {
  name: string
  archived: boolean
  categories: number[]
  featured: boolean
  price: number
  stocks: number
  variants: number[]
  shopId: number
}

export interface IProductServicePut {
  id: number
  name: string
  archived: boolean
  categories: number[]
  featured: boolean
  price: number
  stocks: number
  variants: number[]
}

export interface IProductServiceDelete {
  id: number
}

export const ProductsService = {
  get: async function ({ queryKey }: IProductServiceGet) {
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
      url: `/products${id}?populate=*${shopFilterString}`,
    })
  },
  post: async function (data: IProductServicePost) {
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
  put: async function (data: IProductServicePut) {
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
  delete: async function (data: IProductServiceDelete) {
    const { id } = data

    return authAxios({
      url: `/products/${id}`,
      method: 'DELETE',
    })
  },
}
