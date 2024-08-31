import 'css/post-layout.css'
import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Author } from 'contentlayer/generated'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import TOCInline from 'pliny/ui/TOCInline'
import Bleed from 'pliny/ui/Bleed'
import ScrollProcess from '@/components/ScrollProcess'
import Views from '@/components/UmamiViews'
import Image from '@/components/Image'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Author>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, next, prev, children }: LayoutProps) {
  const { path, date, lastUpdateDate, title, tags, images } = content
  const basePath = path.split('/')[0]
  const displayImage = images?.length > 0 && images[0]

  return (
    <SectionContainer>
      <ScrollProcess />
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="py-6">
            <div className="space-y-4 text-center">
              {displayImage && (
                <div className="w-full">
                  <Bleed>
                    <div className="relative aspect-[2/1] w-full overflow-hidden rounded border shadow">
                      <Image src={displayImage} alt={title} fill className="object-cover" />
                    </div>
                  </Bleed>
                </div>
              )}
              <div>
                <PageTitle viewTransitionName={title}>{title}</PageTitle>
              </div>
              <dl>
                <dt className="sr-only">发布于</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time dateTime={date}>
                    {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                  </time>
                </dd>
              </dl>
            </div>
          </header>
          <div className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0">
            <div className="divide-gray-200 dark:divide-gray-700 max-xl:divide-y xl:pb-0">
              {content.toc.length > 0 && (
                <div className="sticky top-28 overflow-visible max-2xl:hidden">
                  <div className="absolute -left-72 w-64 rounded bg-gray-50 p-4 dark:bg-gray-900/70 dark:shadow-gray-800/40">
                    <h2 className="mb-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
                      目录
                    </h2>
                    <nav className="text-sm">
                      <TOCInline
                        toc={content.toc}
                        liClassName="font-medium text-primary-500 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 post-layout-toc"
                      />
                    </nav>
                  </div>
                </div>
              )}
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">{children}</div>
            </div>
          </div>
          {lastUpdateDate && (
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:divide-y-0">
              <dl className="flex items-center justify-end gap-4 p-2 text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
                <Views path={`/${path}`} />
                <div className="flex items-center justify-end">
                  <dt className="">最后更新于</dt>
                  <dd>
                    <time dateTime={lastUpdateDate}>
                      {new Date(lastUpdateDate).toLocaleDateString(
                        siteMetadata.locale,
                        postDateTemplate
                      )}
                    </time>
                  </dd>
                </div>
              </dl>
            </div>
          )}
          <footer>
            <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 max-xl:hidden xl:row-start-2 xl:divide-y">
              {tags?.length && (
                <div className="py-4 xl:py-8">
                  <h2 className="text-xs tracking-wide text-gray-500 dark:text-gray-400">Tags</h2>
                  <div className="flex flex-wrap">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                </div>
              )}
              {(next || prev) && (
                <div className="flex justify-between py-4">
                  {prev && prev.path && (
                    <div>
                      <h2 className="text-xs tracking-wide text-gray-500 dark:text-gray-400">
                        Previous Article
                      </h2>
                      <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                        <Link href={`/${prev.path}`}>{prev.title}</Link>
                      </div>
                    </div>
                  )}
                  {next && next.path && (
                    <div>
                      <h2 className="text-xs tracking-wide text-gray-500 dark:text-gray-400">
                        Next Article
                      </h2>
                      <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                        <Link href={`/${next.path}`}>{next.title}</Link>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="pt-4 xl:pt-8">
              <Link
                href={`/${basePath}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="Back to the blog"
              >
                &larr; Back to the blogs
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </SectionContainer>
  )
}
