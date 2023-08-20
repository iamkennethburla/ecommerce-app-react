import {
  Button,
  FormLabel,
  FormTextField,
} from '@ecommerce-app/admin/Components'
import { IStore } from '@ecommerce-app/admin/Core/Store'
import { Box } from '@mui/material'
import { useEffect, useMemo } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { TiDelete } from 'react-icons/ti'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useGetVariants, useUpdateVariant } from '../../Hooks'
import { IVariant } from '../../Interfaces'

interface IFormValues {
  id: number
  name: string
  values: {
    id: number
    value: string
  }[]
}

export function EditVariantForm() {
  const params = useParams()
  const { mutate } = useUpdateVariant()
  useGetVariants()
  const { variantsTable } = useSelector((store: IStore) => store.variants)

  const selectedVariant = useMemo(
    () => findVariant(params?.id, variantsTable.data),
    [variantsTable.data, params?.id]
  )

  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      id: undefined,
      name: '',
      values: [],
    },
  })

  const { fields } = useFieldArray({
    control,
    name: 'values',
  })

  useEffect(() => {
    if (selectedVariant && selectedVariant !== undefined) {
      setValue('id', selectedVariant?.id)
      setValue('name', selectedVariant?.name)
      setValue(
        'values',
        selectedVariant?.values?.map((value: string, index: number) => ({
          id: index,
          value: value,
        }))
      )
    } else {
      notFoundError()
    }
  }, [selectedVariant, setValue])

  if (!params?.id || selectedVariant === undefined) return notFoundError()

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
            label="Name"
            size="small"
            error={errors.name?.message}
            {...field}
          />
        )}
      />
      <FormLabel>Values</FormLabel>
      {fields.map((field, index) => {
        return (
          <Box
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Controller
              name={`values.${index}.value`}
              control={control}
              rules={{
                required: 'Value is Required',
              }}
              render={({ field }) => (
                <FormTextField
                  type="text"
                  size="small"
                  error={errors.values?.[index]?.value?.message}
                  {...field}
                />
              )}
            />
            <Box
              style={{
                marginBottom: 10,
                marginLeft: 5,
                cursor: 'pointer',
              }}
            >
              <TiDelete
                style={{
                  color: '#FF6961',
                  fontSize: 22,
                }}
              />
            </Box>
          </Box>
        )
      })}

      <br />
      <Button type="submit" size="small" color="primary" variant="contained">
        Save Changes
      </Button>
    </form>
  )

  function onSubmit(values: IFormValues) {
    mutate(values)
  }

  function findVariant(id: string | undefined, variants: IVariant[]) {
    if (id === undefined) return undefined
    if (isNaN(Number(id))) return undefined

    return variants.find((category: IVariant) => category.id === Number(id))
  }

  function notFoundError() {
    return <div>Category Not Found</div>
  }
}
