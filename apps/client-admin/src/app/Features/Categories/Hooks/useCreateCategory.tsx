import { useMutation, useQueryClient } from '@tanstack/react-query'
import { IStore } from 'apps/client-admin/src/app/Core/Store'
import {
  CategoryService,
  ICategoryServicePost,
} from 'apps/client-admin/src/app/Services'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const useCreateCategory = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { activeShop } = useSelector((store: IStore) => store.shop)

  const { isLoading, mutate } = useMutation({
    mutationFn: CategoryService.post,
    onSuccess: () => {
      queryClient.invalidateQueries(['categories'])
      queryClient.invalidateQueries(['categories-table'])
      navigate('/categories')
    },
  })

  return { isLoading, mutate: mutationFunction }

  function mutationFunction(values: ICategoryServicePost) {
    if (activeShop?.id)
      mutate({
        ...values,
        shopId: activeShop?.id,
      })
  }
}
