import { IStore } from '@ecommerce-app/admin/Core/Store'
import {
  useGetCategoriesTable,
  useUpdateCategory,
} from '@ecommerce-app/admin/Features/Categories/Hooks'
import { ICategory } from '@ecommerce-app/admin/Features/Categories/Interfaces'
import {
  Button,
  FormErrorMessage,
  FormInputWrapper,
} from '@ecommerce-app/common-components'
import { Box, TextField } from '@mui/material'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { MdDeleteOutline } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

interface IFormValues {
  id: number
  name: string
  bannerImage: File | undefined
  bannerName: string
}

export function EditCategoryForm() {
  const params = useParams()
  const { mutate } = useUpdateCategory()
  useGetCategoriesTable()
  const bannerInputRef = useRef<HTMLInputElement>(null)
  const [preview, setPreview] = useState<string | undefined>()
  const { categoriesTable } = useSelector((store: IStore) => store.categories)

  const selectedCategory = useMemo(
    () => findCategory(params?.id, categoriesTable.data),
    [categoriesTable.data, params?.id]
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
      bannerImage: undefined,
      bannerName: '',
    },
  })

  useEffect(() => {
    if (selectedCategory && selectedCategory !== undefined) {
      setValue('id', selectedCategory?.id)
      setValue('name', selectedCategory?.name)
      setPreview(selectedCategory?.bannerImageUrl)
      setValue('bannerName', selectedCategory?.bannerImageName)
    } else {
      notFoundError()
    }
  }, [selectedCategory, setValue])

  if (!params?.id || selectedCategory === undefined) return notFoundError()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        rules={{
          required: 'Category Name Required',
        }}
        render={({ field }) => (
          <FormInputWrapper label="Name" error={errors.name?.message}>
            <TextField type="text" size="small" {...field} />
          </FormInputWrapper>
        )}
      />
      <Box
        style={{
          display: 'none',
        }}
      >
        <Controller
          name="bannerName"
          control={control}
          rules={
            {
              // required: 'Banner Name Required',
            }
          }
          render={({ field }) => (
            <FormInputWrapper
              label="Banner Label"
              error={errors.bannerName?.message}
            >
              <TextField type="text" size="small" {...field} />
            </FormInputWrapper>
          )}
        />
      </Box>
      <Box
        style={{
          width: 400,
          marginBottom: 10,
        }}
      >
        {preview && (
          <Box
            style={{
              width: 400,
              marginBottom: 15,
              position: 'relative',
            }}
          >
            <Button
              onClick={handleDeleteBannerImage}
              variant="contained"
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                background: 'red',
                color: 'white',
                fontSize: 18,
                padding: '4px 6px',
                minWidth: 'fit-content',
              }}
            >
              <MdDeleteOutline />
            </Button>
            <img
              style={{
                width: '100%',
              }}
              src={preview}
              alt="bannerPreview"
            />
          </Box>
        )}
        <Button
          onClick={() => {
            if (bannerInputRef.current) bannerInputRef.current.click()
          }}
          size="small"
          variant="contained"
        >
          Upload Banner Image
        </Button>
        <input
          ref={bannerInputRef}
          id="bannerImage"
          name="bannerImage"
          hidden
          type="file"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const files = event.target.files

            if (!files || files.length === 0) {
              return
            }

            const objectUrl = URL.createObjectURL(files[0])
            setPreview(objectUrl)
            setValue('bannerImage', files[0])
          }}
        />
        <FormErrorMessage>{errors.bannerImage?.message}</FormErrorMessage>
      </Box>
      <br />
      <Button type="submit" size="small" color="primary" variant="contained">
        Save Changes
      </Button>
    </form>
  )

  function onSubmit(values: IFormValues) {
    mutate(values)
  }

  function handleDeleteBannerImage() {
    setValue('bannerImage', undefined)
    setPreview('')
  }

  function findCategory(id: string | undefined, categories: ICategory[]) {
    if (id === undefined) return undefined
    if (isNaN(Number(id))) return undefined

    return categories.find((category: ICategory) => category.id === Number(id))
  }

  function notFoundError() {
    return <div>Category Not Found</div>
  }
}
