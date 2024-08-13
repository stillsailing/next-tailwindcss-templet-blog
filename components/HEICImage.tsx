'use client'

import { isSafari } from 'app/util'
import heic2any from 'heic2any'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import Skeleton from './Skeleton'

const basePath = process.env.BASE_PATH

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
  if (isLoading) return <Skeleton>{src}</Skeleton>
  return <img src={data} {...rest} />
}

export default HEICImage
