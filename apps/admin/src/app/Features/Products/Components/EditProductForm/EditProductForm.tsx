import { Button, FormTextField } from '@ecommerce-app/admin/Components'
import { IStore } from '@ecommerce-app/admin/Core/Store'
import { useGetCategories } from '@ecommerce-app/admin/Features/Categories/Hooks'
import { Box, Chip, Stack } from '@mui/material'
import { useEffect, useMemo } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useGetProductsTable, useUpdateProduct } from '../../Hooks'
import { IProduct } from '../../Interfaces'

interface IFormValues {
  id: number
  name: string
  price: number
  stocks: number
  categories: {
    id: number
    value: string
  }[]
  variants: {
    id: number
    value: string
  }[]
  featured: boolean
  archived: boolean
}

export function EditProductForm() {
  const params = useParams()
  const { mutate } = useUpdateProduct()
  useGetProductsTable()
  useGetCategories()
  const { productsTable } = useSelector((store: IStore) => store.products)
  const { categories } = useSelector((store: IStore) => store.categories)

  const selectedProduct: IProduct | undefined = useMemo(
    () => findProduct(params?.id, productsTable.data),
    [productsTable.data, params?.id]
  )

  const categoryOptions = useMemo(
    () =>
      categories.map((category) => ({
        label: category.name,
        value: category.id,
      })),
    [categories]
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
      price: 0,
      stocks: 0,
      categories: [],
      variants: [],
      featured: false,
      archived: false,
    },
  })

  const categoriesFieldArray = useFieldArray({
    control,
    name: 'categories',
  })

  const variantsFieldArray = useFieldArray({
    control,
    name: 'variants',
  })

  useEffect(() => {
    if (selectedProduct && selectedProduct !== undefined) {
      setValue('id', selectedProduct?.id)
      setValue('name', selectedProduct?.name)
      setValue('price', selectedProduct?.price)
      setValue('stocks', selectedProduct?.stocks)
      setValue('featured', selectedProduct?.featured)
      setValue('archived', selectedProduct?.archived)
      setValue(
        'categories',
        selectedProduct?.categories?.map(
          (
            category: {
              id: number
              name: string
            },
            index: number
          ) => ({
            id: category.id,
            value: category.name,
          })
        )
      )
      setValue(
        'variants',
        selectedProduct?.variants?.map(
          (
            variant: {
              id: number
              name: string
            },
            index: number
          ) => ({
            id: variant.id,
            value: variant.name,
          })
        )
      )
    } else {
      notFoundError()
    }
  }, [selectedProduct, setValue])

  if (!params?.id || selectedProduct === undefined) return notFoundError()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        rules={{
          required: 'Product Name Required',
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
      <Controller
        name="price"
        control={control}
        rules={{
          required: 'Price Required',
        }}
        render={({ field }) => (
          <FormTextField
            type="text"
            label="Price"
            size="small"
            error={errors.price?.message}
            {...field}
          />
        )}
      />

      <Box
        style={{
          width: 210,
        }}
      >
        {/* <Autocomplete
          label="Category"
          value={getValues('selectedCategory')}
          options={categoryOptions}
          error={errors.categories?.message}
          onSelect={(event) => {
            const value = event.target
            console.log(value)
            if (!value) return
            // setValue('selectedCategory', value)
            return event
          }}
          renderInput={(params) => <FormTextField type="text" {...params} />}
          onChange={(event) => {
            const value = event.target.value
            console.log(value)
            if (!value) return
            // setValue('selectedCategory', value)
            return event
          }}
        /> */}

        <Stack direction="row" spacing={1}>
          {categoriesFieldArray.fields.map((field, index: number) => {
            return <Chip key={index} label={field.value} variant="outlined" />
          })}
        </Stack>
      </Box>

      <br />
      <Button type="submit" size="small" color="primary" variant="contained">
        Save Changes
      </Button>
    </form>
  )

  function onSubmit(values: IFormValues) {
    // const updateValues = {
    //   id: values?.id,
    //   name: values.name,
    //   values: values.values,
    // }
    // mutate(updateValues)
  }

  function findProduct(id: string | undefined, products: IProduct[]) {
    if (id === undefined) return undefined
    if (isNaN(Number(id))) return undefined

    return products.find((category: IProduct) => category.id === Number(id))
  }

  function notFoundError() {
    return <div>Category Not Found</div>
  }
}
