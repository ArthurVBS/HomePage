import React from 'react'
import AliceCarousel from 'react-alice-carousel'

type Props = {
  children: React.ReactNode
  responsive?: {}
}

const Carousel: React.FC<Props> = ({ children, responsive }) => {
  if (responsive == undefined) {
    responsive = {
      0: { items: 1 },
      568: { items: 2 },
      1024: { items: 3 },
    }
  }

  return (
    <AliceCarousel
      mouseTracking
      disableButtonsControls
      responsive={responsive}
      controlsStrategy="alternate"
    >
      {children}
    </AliceCarousel>
  )
}

export default Carousel
