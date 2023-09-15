import { Box } from '@mui/material'
import { useState } from 'react'

interface IImagePreviewProps {
  imageUrl: string[]
}

export const ImagePreview = (props: IImagePreviewProps) => {
  const { imageUrl } = props
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0)

  return (
    <Box>
      <img
        style={{
          width: '100%',
          borderRadius: 5,
        }}
        alt="product"
        src={imageUrl[activeImageIndex]}
      />
      <Box
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: 10,
          marginLeft: -5,
          width: 'calc(100% + 5px)',
        }}
      >
        {imageUrl.map((image, index) => (
          <Box
            key={index}
            onClick={() => setActiveImageIndex(index)}
            style={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: 40,
              height: 40,
              overflow: 'hidden',
              margin: '0px 0px 5px 5px',
              borderRadius: 5,
              transitionDuration: '.3s',
              border:
                index === activeImageIndex
                  ? '2px solid red'
                  : '2px solid transparent',
            }}
          >
            <img
              style={{
                width: '100%',
              }}
              alt="product"
              src={image}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}
