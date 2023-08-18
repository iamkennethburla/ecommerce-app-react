import { Button, FormTextField } from '@ecommerce-app/admin/Components'
import { Controller, useForm } from 'react-hook-form'
import { useCreateVariant } from '../../Hooks'

interface IFormValues {
  name: string
  values: string[]
}

export function CreateVariantForm() {
  const { mutate } = useCreateVariant()

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      name: '',
      values: [],
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        rules={{
          required: 'Variant Name Required',
        }}
        render={({ field }) => (
          <FormTextField
            type="text"
            label="Variant Name"
            size="small"
            error={errors.name?.message}
            {...field}
          />
        )}
      />

      <br />
      <Button type="submit" size="small" color="primary" variant="contained">
        Save Changes
      </Button>
    </form>
  )

  function onSubmit(values: IFormValues) {
    mutate(values)
  }
}
