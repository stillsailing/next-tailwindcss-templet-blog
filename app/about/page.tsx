import { genPageMetadata } from 'app/seo'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'

import { Author, allAuthors } from 'contentlayer/generated'

import Comments from '@/components/Comments'
import AboutLayout from '@/layouts/AboutLayout'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Author
  const mainContent = coreContent(author)

  return (
    <>
      <AboutLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AboutLayout>
      <div className="">
        <div className="divider"></div>
        <h2 className="mb-4 text-lg font-bold">给我留言</h2>
        <Comments slug="about" />
      </div>
    </>
  )
}
