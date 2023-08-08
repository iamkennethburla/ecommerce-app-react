import { Button, FormTextField } from '@ecommerce-app/admin/Components'
import { Controller, useForm } from 'react-hook-form'
import { useCreateShop } from '../../Hooks/useCreateShop'

interface IFormValues {
  name: string
}

export function CreateShopForm() {
  const { mutate } = useCreateShop()

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
    mutate(values)
  }
}
