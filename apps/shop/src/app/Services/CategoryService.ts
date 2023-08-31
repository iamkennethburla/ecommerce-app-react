import { publicAxios } from '@ecommerce-app/common-utils'

export interface ICategoryServiceGet {
  queryKey: [
    string,
    {
      params?: { id: number }
    }
  ]
}

export const CategoryService = {
  get: async function ({ queryKey }: ICategoryServiceGet) {
    const [_, { params }] = queryKey

    const id = params?.id || '' ? `/${params?.id}` : ''
    const shopFilterString = `&filters[shop][id][$eq]=${process.env['SHOP_ID']}`

    return publicAxios({
      url: `/categories${id}?populate=*${shopFilterString}`,
    })
  },
}
