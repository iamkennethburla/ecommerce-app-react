import { useLogin } from '@ecommerce-app/admin/src/app/Features/Auth/Hooks'
import { Button, FormInputWrapper } from '@ecommerce-app/common-components'
import { TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'

interface IFormValues {
  email: string
  password: string
}

export function LoginForm() {
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
          <FormInputWrapper label="Email" error={errors.email?.message}>
            <TextField type="text" fullWidth {...field} />
          </FormInputWrapper>
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
          <FormInputWrapper label="Password" error={errors.password?.message}>
            <TextField type="password" fullWidth {...field} />
          </FormInputWrapper>
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
