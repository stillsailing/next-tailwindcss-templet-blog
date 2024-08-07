'use client'

import { isSafari } from 'app/util'
import heic2any from 'heic2any'
import { useEffect, useState } from 'react'

const basePath = process.env.BASE_PATH

async function convert(src: string) {
  const blob = await fetch(src).then((res) => res.blob())
  const convertion = await heic2any({
    blob,
    toType: 'image/jpeg',
    quality: 1,
  })
  const imageUrl = URL.createObjectURL(convertion as Blob)
  return imageUrl
}

const HEICImage = ({ src, ...rest }) => {
  const [imgSrc, setImgSrc] = useState(isSafari() ? src : '')

  useEffect(() => {
    if (!isSafari()) {
      // safari 支持 heic 格式图片，无需转换
      convert(`${basePath || ''}${src}`).then((imgSrc) => setImgSrc(imgSrc))
    }
  }, [src])

  return <img src={imgSrc} {...rest} />
}

export default HEICImage
