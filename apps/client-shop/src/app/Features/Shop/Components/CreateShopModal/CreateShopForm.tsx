import { Button, FormInputWrapper } from '@ecommerce-app/common-components'
import { TextField } from '@mui/material'
import { IStore } from 'apps/client-admin/src/app/Core/Store'
import { useCreateShop } from 'apps/client-admin/src/app/Features/Shop/Hooks'
import { Controller, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

interface IFormValues {
  name: string
}

export function CreateShopForm() {
  const { mutate } = useCreateShop()

  const { activeShop } = useSelector((store: IStore) => store.shop)

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormValues>()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{
          required: 'Shop Name Required',
        }}
        render={({ field }) => (
          <FormInputWrapper label="Shop Name" error={errors.name?.message}>
            <TextField type="text" fullWidth autoFocus {...field} />
          </FormInputWrapper>
        )}
      />
      <br />
      <Button type="submit" color="primary" variant="contained">
        Create
      </Button>
    </form>
  )

  function onSubmit(values: IFormValues) {
    if (activeShop !== undefined) mutate(values)
    else
      mutate({
        ...values,
        active: true,
      })
  }
}
