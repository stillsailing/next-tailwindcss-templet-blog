import type { MDXComponents } from 'mdx/types'
import dynamic from 'next/dynamic'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import Pre from 'pliny/ui/Pre'
import TOCInline from 'pliny/ui/TOCInline'

import Compatibility from './Compatibility'
import Image from './Image'
import ImageGallery from './ImageGallery'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'

export const components: MDXComponents = {
  Image,
  HEICImage: dynamic(() => import('./HEICImage'), { ssr: false }), // disable pre-render
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  Compatibility,
  ImageGallery,
}
