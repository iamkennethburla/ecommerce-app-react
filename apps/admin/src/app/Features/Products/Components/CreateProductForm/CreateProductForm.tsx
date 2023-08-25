import { Button, FormInputWrapper } from '@ecommerce-app/admin/Components'
import { IStore } from '@ecommerce-app/admin/Core/Store'
import { useGetCategories } from '@ecommerce-app/admin/Features/Categories/Hooks'
import { useGetVariants } from '@ecommerce-app/admin/Features/Variants/Hooks'
import {
  Autocomplete,
  Box,
  Checkbox,
  Chip,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { TiDelete } from 'react-icons/ti'
import { useSelector } from 'react-redux'
import { useCreateProduct, useGetProductsTable } from '../../Hooks'

interface IOption {
  value: number
  name: string
}

export interface IFormValues {
  id: number
  name: string
  price: number
  stocks: number
  categories: IOption[]
  variants: IOption[]
  featured: boolean
  archived: boolean
  selectedCategory: IOption | undefined
  selectedVariant: IOption | undefined
}

export function CreateProductForm() {
  const { mutate } = useCreateProduct()
  useGetProductsTable()
  useGetCategories()
  useGetVariants()
  const { variants } = useSelector((store: IStore) => store.variants)
  const { categories } = useSelector((store: IStore) => store.categories)
  const [categoryOptions, setCategoryOptions] = useState<IOption[]>([])
  const [variantOptions, setVariantOptions] = useState<IOption[]>([])

  const {
    handleSubmit,
    control,
    getValues,
    resetField,
    watch,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      id: undefined,
      name: '',
      price: undefined,
      stocks: undefined,
      categories: [],
      variants: [],
      featured: false,
      archived: false,
      selectedCategory: undefined,
      selectedVariant: undefined,
    },
  })

  useEffect(() => {
    const categoriesOptions = categories.map((category) => ({
      name: category.name,
      value: category.id,
    }))
    const variantsOptions = variants.map((category) => ({
      name: category.name,
      value: category.id,
    }))

    setCategoryOptions(categoriesOptions)
    setVariantOptions(variantsOptions)
  }, [categories, variants])

  const categoriesFieldArray = useFieldArray({
    control,
    name: 'categories',
  })

  const variantsFieldArray = useFieldArray({
    control,
    name: 'variants',
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        style={{
          display: 'flex',
        }}
      >
        <Box
          style={{
            width: 350,
            paddingRight: 50,
          }}
        >
          <Box
            style={{
              marginBottom: 10,
            }}
          >
            <Controller
              name="name"
              control={control}
              rules={{
                required: 'Product Name Required',
              }}
              render={({ field }) => (
                <FormInputWrapper label="Name" error={errors.name?.message}>
                  <TextField type="text" label="" size="small" {...field} />
                </FormInputWrapper>
              )}
            />
          </Box>
          <Box
            style={{
              marginBottom: 10,
            }}
          >
            <Controller
              name="price"
              control={control}
              rules={{
                required: 'Price Required',
              }}
              render={({ field }) => (
                <FormInputWrapper label="Price" error={errors.price?.message}>
                  <TextField
                    defaultValue={field.value}
                    type="number"
                    label=""
                    size="small"
                    {...field}
                  />
                </FormInputWrapper>
              )}
            />
          </Box>
          <Box
            style={{
              marginBottom: 10,
            }}
          >
            <Controller
              name="stocks"
              control={control}
              rules={{
                required: 'Available Stocks Required',
              }}
              render={({ field }) => (
                <FormInputWrapper
                  label="Available Stocks"
                  error={errors.stocks?.message}
                >
                  <TextField
                    defaultValue={field.value}
                    type="number"
                    label=""
                    size="small"
                    {...field}
                  />
                </FormInputWrapper>
              )}
            />
          </Box>

          <Box
            style={{
              width: 283,
              marginBottom: 10,
            }}
          >
            <Box
              style={{
                display: 'flex',
              }}
            >
              <Controller
                name="selectedCategory"
                defaultValue={undefined}
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <FormInputWrapper
                    label="Categories"
                    error={errors.categories?.message}
                  >
                    <Autocomplete
                      fullWidth
                      clearOnBlur
                      size="small"
                      inputValue={value === undefined ? '' : value?.name}
                      value={value}
                      options={categoryOptions}
                      renderInput={(params) => (
                        <TextField type="text" {...params} />
                      )}
                      getOptionLabel={(option) => option.name}
                      onChange={(event, item) => {
                        onChange(item)
                      }}
                      onBlur={onBlur}
                    />
                  </FormInputWrapper>
                )}
              />
              <Button
                style={{
                  marginLeft: 10,
                  marginTop: 24,
                  height: 'fit-content',
                }}
                disabled={!watch('selectedCategory')}
                onClick={() => appendCategory()}
                type="submit"
                size="small"
                color="primary"
                variant="contained"
              >
                Add
              </Button>
            </Box>
            <Stack
              direction="row"
              useFlexGap
              flexWrap="wrap"
              spacing={1}
              style={{
                marginTop: categoriesFieldArray.fields.length > 0 ? 10 : 0,
              }}
            >
              {categoriesFieldArray.fields.map((field, index: number) => {
                return (
                  <Box
                    key={index}
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <Chip
                      label={field.name}
                      deleteIcon={
                        <TiDelete
                          style={{
                            color: '#FF6961',
                            fontSize: 22,
                          }}
                        />
                      }
                      onDelete={() => deleteCategory(index)}
                      variant="outlined"
                    />
                  </Box>
                )
              })}
            </Stack>
          </Box>

          <Box
            style={{
              width: 283,
              marginBottom: 10,
            }}
          >
            <Box
              style={{
                display: 'flex',
              }}
            >
              <Controller
                name="selectedVariant"
                defaultValue={undefined}
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <FormInputWrapper
                    label="Variants"
                    error={errors.variants?.message}
                  >
                    <Autocomplete
                      fullWidth
                      clearOnBlur
                      size="small"
                      inputValue={value === undefined ? '' : value?.name}
                      value={value}
                      options={variantOptions}
                      renderInput={(params) => (
                        <TextField type="text" {...params} />
                      )}
                      getOptionLabel={(option) => option.name}
                      onChange={(event, item) => {
                        onChange(item)
                      }}
                      onBlur={onBlur}
                    />
                  </FormInputWrapper>
                )}
              />
              <Button
                style={{
                  marginLeft: 10,
                  marginTop: 24,
                  height: 'fit-content',
                }}
                disabled={!watch('selectedVariant')}
                onClick={() => appendVariant()}
                type="submit"
                size="small"
                color="primary"
                variant="contained"
              >
                Add
              </Button>
            </Box>
            <Stack
              direction="row"
              useFlexGap
              flexWrap="wrap"
              spacing={1}
              style={{
                marginTop: variantsFieldArray.fields.length > 0 ? 10 : 0,
              }}
            >
              {variantsFieldArray.fields.map((field, index: number) => {
                return (
                  <Box
                    key={index}
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <Chip
                      label={field.name}
                      deleteIcon={
                        <TiDelete
                          style={{
                            color: '#FF6961',
                            fontSize: 22,
                          }}
                        />
                      }
                      onDelete={() => deleteVariant(index)}
                      variant="outlined"
                    />
                  </Box>
                )
              })}
            </Stack>
          </Box>
        </Box>
        <Box
          style={{
            paddingTop: 20,
          }}
        >
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid lightgray',
              borderRadius: 5,
              width: 200,
              marginBottom: 10,
            }}
          >
            <Controller
              name="featured"
              control={control}
              render={({ field }) => (
                <Checkbox
                  {...field}
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
              )}
            />
            <Typography>Featured</Typography>
          </Box>
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid lightgray',
              borderRadius: 5,
              width: 200,
            }}
          >
            <Controller
              name="archived"
              control={control}
              render={({ field }) => (
                <Checkbox
                  {...field}
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
              )}
            />
            <Typography>Archived</Typography>
          </Box>
        </Box>
      </Box>

      <br />
      <Box
        style={{
          marginTop: 50,
          width: 283,
        }}
      >
        <Button
          fullWidth
          type="submit"
          size="small"
          color="primary"
          variant="contained"
        >
          Save Changes
        </Button>
      </Box>
    </form>
  )

  function onSubmit({
    id,
    name,
    archived,
    categories,
    featured,
    price,
    stocks,
    variants,
  }: IFormValues) {
    const updateValues = {
      id,
      name,
      archived,
      categories: categories.map((category) => category.value),
      variants: variants.map((variant) => variant.value),
      featured,
      price,
      stocks,
    }
    mutate(updateValues)
  }

  function filteredOptions(
    selectedOptions: IOption[],
    options: IOption[],
    setStateCallback: (options: IOption[]) => void
  ) {
    const selectedOptionIds = selectedOptions?.map((option) => option?.value)

    const filteredOptions = options.filter(
      (state) => !selectedOptionIds?.includes(state.value)
    )

    setStateCallback(filteredOptions)
  }

  function appendCategory() {
    if (getValues('selectedCategory') === undefined) return
    const category = getValues('selectedCategory') as {
      name: string
      value: number
    }

    const selectedCategories = [...getValues('categories'), category]

    categoriesFieldArray.append(category)
    filteredOptions(selectedCategories, categoryOptions, setCategoryOptions)
    resetField('selectedCategory')
  }

  function deleteCategory(index: number) {
    const selectedCategories = [...getValues('categories')][index]

    categoriesFieldArray.remove(index)
    setCategoryOptions((prevState) => [...prevState, selectedCategories])
  }

  function appendVariant() {
    if (getValues('selectedVariant') === undefined) return
    const variants = getValues('selectedVariant') as {
      name: string
      value: number
    }

    const selectedVariants = [...getValues('variants'), variants]

    variantsFieldArray.append(variants)
    filteredOptions(selectedVariants, variantOptions, setVariantOptions)
    resetField('selectedVariant')
  }

  function deleteVariant(index: number) {
    const selectedVariants = [...getValues('variants')][index]

    variantsFieldArray.remove(index)
    setVariantOptions((prevState) => [...prevState, selectedVariants])
  }
}
