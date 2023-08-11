import { FormTextField } from '@ecommerce-app/admin/Components'
import { useGetCategories } from '@ecommerce-app/admin/Features/Categories/Hooks'
import debounce from 'debounce'
import { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'

export interface IFormValues {
  name: string
}

export const FilterForm = () => {
  const { setValue, handleSubmit, getValues } = useForm<IFormValues>()

  const { refetch } = useGetCategories(getValues())

  return (
    <FormTextField
      type="text"
      onChange={debounce((event: ChangeEvent<HTMLInputElement>) => {
        const value = event?.target?.value

        setValue('name', value)
        handleSubmit(onSubmit)()
      }, 500)}
    />
  )

  function onSubmit() {
    refetch()
  }
}
