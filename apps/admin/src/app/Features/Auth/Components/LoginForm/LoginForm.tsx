import { FormTextField } from '@ecommerce-app/admin/Components'
import { Controller, useForm } from 'react-hook-form'

interface IFormValues {
  email: string
  sample: string
  password: string
}

export function LoginForm() {
  const {
    handleSubmit,
    control,
    register,
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
            type="email"
            label="Email"
            size="small"
            fullWidth
            error={errors.email?.message}
            {...field}
          />
        )}
      />
      <FormTextField
        type="text"
        error={errors.sample?.message}
        {...register('sample')}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => <FormTextField type="password" {...field} />}
      />
      <button type="submit">Login</button>
    </form>
  )

  function onSubmit(values: IFormValues) {
    console.log(values)
  }
}
