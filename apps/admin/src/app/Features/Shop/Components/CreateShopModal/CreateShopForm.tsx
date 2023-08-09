import { Button, FormTextField } from '@ecommerce-app/admin/Components'
import { IStore } from '@ecommerce-app/admin/Core/Store'
import { useCreateShop } from '@ecommerce-app/admin/Features/Shop/Hooks'
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
          <FormTextField
            type="text"
            label="Shop Name"
            fullWidth
            error={errors.name?.message}
            autoFocus
            {...field}
          />
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
