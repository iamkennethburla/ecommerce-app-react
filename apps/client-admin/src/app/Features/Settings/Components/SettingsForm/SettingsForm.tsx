import { IStore } from '@ecommerce-app/admin/src/app/Core/Store'
import { useUpdatePreferences } from '@ecommerce-app/admin/src/app/Features/Settings/Hooks'
import { Button, FormInputWrapper } from '@ecommerce-app/common-components'
import { TextField } from '@mui/material'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

interface IFormValues {
  name: string
}

export function SettingsForm() {
  const { mutate } = useUpdatePreferences()
  const { activeShop } = useSelector((store: IStore) => store.shop)

  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      name: '',
    },
  })

  useEffect(() => {
    setValue('name', activeShop?.name || '')
  }, [activeShop?.name, setValue])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        rules={{
          required: 'Shop Name Required',
        }}
        render={({ field }) => (
          <FormInputWrapper label="Name" error={errors.name?.message}>
            <TextField type="text" size="small" {...field} />
          </FormInputWrapper>
        )}
      />
      <Button type="submit" size="small" color="primary" variant="contained">
        Save Changes
      </Button>
    </form>
  )

  function onSubmit(values: IFormValues) {
    mutate(values.name)
  }
}
