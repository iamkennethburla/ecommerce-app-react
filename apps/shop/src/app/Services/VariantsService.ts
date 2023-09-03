import { publicAxios } from '@ecommerce-app/common-utils'

export interface IVariantServiceGet {
  queryKey: [
    string,
    {
      params?: { id: number }
    }
  ]
}

export const VariantsService = {
  get: async function ({ queryKey }: IVariantServiceGet) {
    const [_, { params }] = queryKey

    const id = params?.id || '' ? `/${params?.id}` : ''
    const shopFilterString = `&filters[shop][id][$eq]=${process.env['SHOP_ID']}`

    return publicAxios({
      url: `/variants${id}?populate=*${shopFilterString}`,
    })
  },
}
