'use client'

import { isSafari } from 'app/util'
import heic2any from 'heic2any'
import useSWR from 'swr'

async function convert(src: string) {
  if (isSafari()) {
    // safari 支持 heic 格式图片，无需转换
    return src
  }
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
  const { data, error, isLoading } = useSWR('convert image/heic', () => convert(src))
  if (isLoading) return <div className="skeleton aspect-golden w-full"></div>
  return <img src={data} {...rest} />
}

export default HEICImage
