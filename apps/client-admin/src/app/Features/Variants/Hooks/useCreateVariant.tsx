import { IStore } from '@ecommerce-app/admin/Core/Store'
import {
  IVariantServicePost,
  VariantsService,
} from '@ecommerce-app/admin/Services'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const useCreateVariant = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { activeShop } = useSelector((store: IStore) => store.shop)

  const { isLoading, mutate } = useMutation({
    mutationFn: VariantsService.post,
    onSuccess: () => {
      queryClient.invalidateQueries(['variants-table'])
      navigate('/variants')
    },
  })

  return { isLoading, mutate: mutationFunction }

  function mutationFunction(values: IVariantServicePost) {
    if (activeShop?.id)
      mutate({
        ...values,
        shopId: activeShop?.id,
      })
  }
}
