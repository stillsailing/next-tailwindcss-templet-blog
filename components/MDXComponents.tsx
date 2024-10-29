import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import dynamic from 'next/dynamic'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import Compatibility from './Compatibility'
import ImageGallery from './ImageGallery'

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
