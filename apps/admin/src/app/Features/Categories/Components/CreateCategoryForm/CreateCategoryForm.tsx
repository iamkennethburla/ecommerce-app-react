import { Button, FormTextField } from '@ecommerce-app/admin/Components'
import { IStore } from '@ecommerce-app/admin/Core/Store'
import { useUpdatePreferences } from '@ecommerce-app/admin/Features/Settings/Hooks'
import { Box } from '@mui/material'
import { useEffect, useRef } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

interface IFormValues {
  name: string
  bannerUrl: File | undefined
}

export function CreateCategoryForm() {
  const { mutate } = useUpdatePreferences()
  const { activeShop } = useSelector((store: IStore) => store.shop)
  const bannerInputRef = useRef<HTMLInputElement>(null)

  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      name: '',
      bannerUrl: undefined,
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
          <FormTextField
            type="text"
            label="Name"
            size="small"
            error={errors.name?.message}
            {...field}
          />
        )}
      />
      <Box>
        <Button
          onClick={() => {
            if (bannerInputRef.current) bannerInputRef.current.click()
          }}
          size="small"
          variant="contained"
        >
          Upload File
        </Button>
        <input
          ref={bannerInputRef}
          id="bannerUrl"
          name="bannerUrl"
          hidden
          type="file"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.files
            console.log(value)
          }}
        />
      </Box>
      <br />
      <Button type="submit" size="small" color="primary" variant="contained">
        Save Changes
      </Button>
    </form>
  )

  function onSubmit(values: IFormValues) {
    mutate(values.name)
  }
}
