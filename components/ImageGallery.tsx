import React from 'react'
import Image from './Image'

interface ImageGalleryProps {
  images: string[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="columns-1 gap-4 sm:columns-2 md:columns-3">
      {images.map((src, index) => (
        <div key={index} className="relative mb-4 flex break-inside-avoid flex-col">
          <Image src={src} width={340} height={340} alt={`Gallery image ${index + 1}`} />
        </div>
      ))}
    </div>
  )
}

export default ImageGallery
