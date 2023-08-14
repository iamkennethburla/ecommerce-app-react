import { ITablePagination } from '@ecommerce-app/admin/Components';
import { authAxios } from '@ecommerce-app/admin/Utils';

export const CategoryService = {
  get: async function ({
    queryKey,
  }: {
    queryKey: [
      string,
      { params?: { id: number }, filter?: { name?: string }; pagination?: ITablePagination }
    ]
  }) {
    const [_, { params, filter, pagination }] = queryKey

    const id = params?.id || ""
      ? `/${params?.id}`
      : ''
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
      url: `/categories${id}?populate=*${nameFilterString}${pageFilterString}${pageLimitFilterString}`,
    })
  },
  post: async function (params: { name: string; bannerUrl?: File }) {
    const { name, bannerUrl } = params

    return authAxios({
      url: '/categories',
      method: 'POST',
      data: {
        data: {
          name,
          bannerUrl,
        },
      },
    })
  },
  put: async function (params: { id: number; name: string; bannerUrl?: File }) {
    const { id, name, bannerUrl } = params

    return authAxios({
      url: `/categories/${id}`,
      method: 'PUT',
      data: {
        data: {
          name,
          bannerUrl,
        },
      },
    })
  },
}
