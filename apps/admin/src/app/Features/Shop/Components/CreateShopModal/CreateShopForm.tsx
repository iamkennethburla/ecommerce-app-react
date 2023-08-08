import { Button, FormTextField } from '@ecommerce-app/admin/Components'
import { useLogin } from '@ecommerce-app/admin/Features/Auth/Hooks'
import { Controller, useForm } from 'react-hook-form'

interface IFormValues {
  email: string
  sample: string
  password: string
}

export function CreateShopForm() {
  const { mutate } = useLogin()

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormValues>()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{
          required: 'Email Required',
        }}
        render={({ field }) => (
          <FormTextField
            type="text"
            label="Email"
            fullWidth
            error={errors.email?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{
          required: 'Password Required',
        }}
        render={({ field }) => (
          <FormTextField
            type="password"
            label="Password"
            fullWidth
            error={errors.password?.message}
            {...field}
          />
        )}
      />
      <br />
      <Button type="submit" color="primary" variant="contained">
        Login
      </Button>
    </form>
  )

  function onSubmit(values: IFormValues) {
    mutate(values)
  }
}
