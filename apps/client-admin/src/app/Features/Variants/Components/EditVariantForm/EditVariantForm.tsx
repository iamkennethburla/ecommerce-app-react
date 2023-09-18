import {
  Button,
  FormInputWrapper,
  FormLabel,
} from '@ecommerce-app/common-components'
import { Box, TextField } from '@mui/material'
import { IStore } from 'apps/client-admin/src/app/Core/Store'
import { useEffect, useMemo } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { MdAdd } from 'react-icons/md'
import { TiDelete } from 'react-icons/ti'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useGetVariantsTable, useUpdateVariant } from '../../Hooks'
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
  useGetVariantsTable()
  const { variantsTable } = useSelector((store: IStore) => store.variants)

  const selectedVariant = useMemo(
    () => findVariant(params?.id, variantsTable.data),
    [variantsTable.data, params?.id]
  )

  const {
    handleSubmit,
    setValue,
    control,
    getValues,
    trigger,
    watch,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      id: undefined,
      name: '',
      values: [],
    },
  })

  const { fields, append, remove } = useFieldArray({
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
          <FormInputWrapper label="Name" error={errors.name?.message}>
            <TextField type="text" size="small" {...field} />
          </FormInputWrapper>
        )}
      />

      <Box>
        <FormLabel>Values</FormLabel>
        {fields.map((field, index: number) => {
          return (
            <Box
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                width: 235,
              }}
            >
              <Controller
                name={`values.${index}.value`}
                control={control}
                rules={{
                  required: 'Value is Required',
                }}
                render={({ field }) => (
                  <FormInputWrapper
                    error={errors.values?.[index]?.value?.message}
                  >
                    <TextField type="text" size="small" {...field} />
                  </FormInputWrapper>
                )}
              />
              <Box
                style={{
                  marginBottom: 10,
                  marginLeft: 5,
                  cursor: 'pointer',
                  position: 'absolute',
                  top: 6,
                  right: 0,
                }}
                onClick={() => deleteValue(index)}
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
        <Button
          size="small"
          color="primary"
          variant="text"
          startIcon={<MdAdd />}
          onClick={() => appendValue()}
        >
          Add
        </Button>
      </Box>

      <br />
      <Button type="submit" size="small" color="primary" variant="contained">
        Save Changes
      </Button>
    </form>
  )

  function onSubmit(values: IFormValues) {
    const updateValues = {
      id: values?.id,
      name: values.name,
      values: values.values,
    }

    mutate(updateValues)
  }

  function deleteValue(index: number) {
    remove(index)
  }

  function appendValue() {
    const hasEmptyInput =
      getValues('values').filter((value) => !value?.value)?.length > 0
    const valuesLength = getValues('values').length

    trigger('values')

    if (hasEmptyInput) {
      return
    }

    append({ id: valuesLength, value: '' })
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
