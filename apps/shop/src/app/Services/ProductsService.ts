import { publicAxios } from '@ecommerce-app/common-utils'

export interface IProductServiceGet {
  queryKey: [
    string,
    {
      params?: { id: number }
      filter?: { featured: boolean }
    }
  ]
}

export const ProductsService = {
  get: async function ({ queryKey }: IProductServiceGet) {
    const [_, { params, filter }] = queryKey

    const id = params?.id || '' ? `/${params?.id}` : ''
    const shopFilterString = `&filters[shop][id][$eq]=${process.env['SHOP_ID']}`
    const featuredFilterString =
      filter?.featured && `&filters[featured][$eq]=${filter?.featured}`

    return publicAxios({
      url: `/products${id}?populate=*${shopFilterString}${featuredFilterString}`,
    })
  },
}
