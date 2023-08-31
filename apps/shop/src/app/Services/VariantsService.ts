import { authAxios } from '@ecommerce-app/common-utils'

export interface IVariantServiceGet {
  queryKey: [
    string,
    {
      params?: { id: number }
      filter?: { featured: boolean }
    }
  ]
}

export const VariantsService = {
  get: async function ({ queryKey }: IVariantServiceGet) {
    const [_, { params, filter }] = queryKey

    const id = params?.id || '' ? `/${params?.id}` : ''
    const shopFilterString = `&filters[shop][id][$eq]=${process.env['SHOP_ID']}`

    return authAxios({
      url: `/variants${id}?populate=*${shopFilterString}`,
    })
  },
}
