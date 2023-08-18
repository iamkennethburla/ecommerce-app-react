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
        imageUrl?: File | string
        price?: number
        stocks?: number
        categoryId?: number
    }) {
        const { name, imageUrl, price } = data
        return authAxios({
            url: '/products',
            method: 'POST',
            data: {
                data: {
                    name,
                    imageUrl,
                    price,
                },
            },
        })
    },
    put: async function (data: {
        id: number
        name: string
        bannerImage?: File
        bannerName?: string
    }) {
        const { id, name, bannerImage, bannerName } = data

        return authAxios({
            url: `/products/${id}`,
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
    delete: async function (data: { id: number }) {
        const { id } = data

        return authAxios({
            url: `/products/${id}`,
            method: 'DELETE',
        })
    },
}