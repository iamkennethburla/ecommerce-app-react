import { ITablePagination } from '@ecommerce-app/common-components'
import { authAxios } from '@ecommerce-app/common-utils'

export interface IVariantServiceGet {
  queryKey: [
    string,
    {
      params?: { id: number }
      filter?: { name?: string; shopId?: number }
      pagination?: ITablePagination
    }
  ]
}

export interface IVariantServicePost {
  name: string
  values: { id: number; value: string }[]
  shopId: number
}

export interface IVariantServicePut {
  id: number
  name: string
  values: { id: number; value: string }[]
}

export interface IVariantServiceDelete {
  id: number
}

export const VariantsService = {
  get: async function ({ queryKey }: IVariantServiceGet) {
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
      url: `/variants${id}?populate=*${shopFilterString}`,
    })
  },
  post: async function (data: IVariantServicePost) {
    const { name, values, shopId } = data
    return authAxios({
      url: '/variants',
      method: 'POST',
      data: {
        data: {
          name,
          values,
          shop: shopId,
        },
      },
    })
  },
  put: async function (data: IVariantServicePut) {
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
  delete: async function (data: IVariantServiceDelete) {
    const { id } = data

    return authAxios({
      url: `/variants/${id}`,
      method: 'DELETE',
    })
  },
}
