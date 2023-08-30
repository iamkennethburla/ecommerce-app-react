import { IStore } from '@ecommerce-app/admin/Core/Store'
import {
  IProductServicePost,
  ProductsService,
} from '@ecommerce-app/admin/Services'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const useCreateProduct = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { activeShop } = useSelector((store: IStore) => store.shop)

  const { isLoading, mutate } = useMutation({
    mutationFn: ProductsService.post,
    onSuccess: () => {
      queryClient.invalidateQueries(['products-table'])
      navigate('/products')
    },
  })

  return { isLoading, mutate: mutationFunction }

  function mutationFunction(values: IProductServicePost) {
    if (activeShop?.id)
      mutate({
        ...values,
        shopId: activeShop?.id,
      })
  }
}
