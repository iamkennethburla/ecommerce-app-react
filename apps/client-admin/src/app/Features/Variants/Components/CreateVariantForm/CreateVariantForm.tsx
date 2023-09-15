import {
  Button,
  FormInputWrapper,
  FormLabel,
} from '@ecommerce-app/common-components'
import { Box, TextField } from '@mui/material'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { MdAdd } from 'react-icons/md'
import { TiDelete } from 'react-icons/ti'
import { useCreateVariant } from '../../Hooks'

interface IFormValues {
  name: string
  values: {
    id: number
    value: string
  }[]
}

export function CreateVariantForm() {
  const { mutate } = useCreateVariant()

  const {
    handleSubmit,
    trigger,
    control,
    getValues,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      name: '',
      values: [{ id: 0, value: '' }],
    },
  })

  const { fields, remove, append } = useFieldArray({
    control,
    name: 'values',
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
}
