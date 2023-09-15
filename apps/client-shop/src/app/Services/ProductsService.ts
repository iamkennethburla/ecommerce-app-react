import { publicAxios } from '@ecommerce-app/common-utils'

export interface IProductServiceGet {
  queryKey: [
    string,
    {
      params?: { id: number }
      filter?: { featured?: boolean; categoryId?: number }
    }
  ]
}

export const ProductsService = {
  get: async function ({ queryKey }: IProductServiceGet) {
    const [_, { params, filter }] = queryKey

    const id = params?.id || '' ? `/${params?.id}` : ''
    const shopFilterString = `&filters[shop][id][$eq]=${process.env['SHOP_ID']}`
    const featuredFilterString = filter?.featured
      ? `&filters[featured][$eq]=${filter?.featured}`
      : ''
    const categoryFilterString = filter?.categoryId
      ? `&filters[categories][id][$eq]=${filter?.categoryId}`
      : ''

    return publicAxios({
      url: `/products${id}?populate=*${shopFilterString}${featuredFilterString}${categoryFilterString}`,
    })
  },
}
