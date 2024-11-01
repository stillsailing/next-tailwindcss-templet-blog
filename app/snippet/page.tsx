import { genPageMetadata } from 'app/seo'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

import { allSnippets } from 'contentlayer/generated'

import MasonryLayout from '@/layouts/MasonryLayout'

export const metadata = genPageMetadata({
  title: 'Snippet',
  description: 'Snippets of Code & Life',
})

export default function SnippetPage() {
  const posts = allCoreContent(sortPosts(allSnippets))
  return <MasonryLayout posts={posts} title="Snippets" />
}
