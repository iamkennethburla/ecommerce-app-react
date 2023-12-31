import { TextField } from '@mui/material'
import { IStore } from 'apps/client-admin/src/app/Core/Store'
import { actions } from 'apps/client-admin/src/app/Features/Categories/Store'
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
  const { categoriesTable } = useSelector((store: IStore) => store.categories)

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
      actions.updateCategoriesTable({
        ...categoriesTable,
        filter: values,
      })
    )
  }
}
