import React, { useEffect } from 'react'
import { Image } from './styles'

type Props = {
  images: string[]
}

const ImageSlider: React.FC<Props> = ({ images }) => {
  const [activeImageIndex, setActiveImageIndex] = React.useState(0)
  const INTERVAL_TIME = 3000

  const autoPlayImages = () => {
    const nextImage = activeImageIndex + 1
    setActiveImageIndex(nextImage >= images.length ? 0 : nextImage)
  }

  useEffect(() => {
    const interval = setInterval(autoPlayImages, INTERVAL_TIME)
    return () => clearInterval(interval)
  }, [activeImageIndex])

  return <Image src={images[activeImageIndex]} alt="Project Image" />
}

export default ImageSlider
