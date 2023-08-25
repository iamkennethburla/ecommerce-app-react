import { IStore } from '@ecommerce-app/admin/Core/Store'
import { actions } from '@ecommerce-app/admin/Features/Products/Store'
import { TextField } from '@mui/material'
import debounce from 'debounce'
import { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

export interface IFormValues {
  name: string
}

export const FilterForm = () => {
  const { setValue, handleSubmit } = useForm<IFormValues>()
  const dispatch = useDispatch()
  const { productsTable } = useSelector((store: IStore) => store.products)

  return (
    <TextField
      type="text"
      onChange={debounce((event: ChangeEvent<HTMLInputElement>) => {
        const value = event?.target?.value

        setValue('name', value)
        handleSubmit(onSubmit)()
      }, 500)}
    />
  )

  function onSubmit(values: IFormValues) {
    dispatch(
      actions.updateProductsTable({
        ...productsTable,
        filter: values,
      })
    )
  }
}
