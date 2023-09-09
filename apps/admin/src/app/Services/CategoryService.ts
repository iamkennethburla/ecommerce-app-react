import { ITablePagination } from '@ecommerce-app/common-components'
import { authAxios } from '@ecommerce-app/common-utils'

export interface ICategoryServiceGet {
  queryKey: [
    string,
    {
      params?: { id: number }
      filter?: { name?: string; shopId?: number }
      pagination?: ITablePagination
    }
  ]
}

export interface ICategoryServicePost {
  name: string
  bannerImage?: File
  bannerName?: string
  shopId: number
}

export interface ICategoryServicePut {
  id: number
  name: string
  bannerImage?: File
  bannerName?: string
}

export interface ICategoryServiceDelete {
  id: number
}

export const CategoryService = {
  get: async function ({ queryKey }: ICategoryServiceGet) {
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
      url: `/categories${id}?populate=*${shopFilterString}`,
    })
  },
  post: async function (data: ICategoryServicePost) {
    const { name, bannerImage, bannerName, shopId } = data

    const formData = new FormData()

    formData.append("files", bannerImage || "")

    return authAxios.post("/upload", formData)
      .then((response) => {

        const imageUrl = response.data[0].url

        return authAxios.post('/categories', {
          data: {
            name,
            bannerImage: imageUrl,
            bannerName,
            shop: shopId,
          }
        })


      }).catch((error) => error)
  },
  put: async function (data: ICategoryServicePut) {
    const { id, name, bannerImage, bannerName } = data

    return authAxios({
      url: `/categories/${id}`,
      method: 'PUT',
      data: {
        data: {
          name,
          bannerImage,
          bannerName,
        },
      },
    })
  },
  delete: async function (data: ICategoryServiceDelete) {
    const { id } = data

    return authAxios({
      url: `/categories/${id}`,
      method: 'DELETE',
    })
  },
}
