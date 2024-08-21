import 'css/post-layout.css'
import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import TOCInline from 'pliny/ui/TOCInline'
import ScrollProcess from '@/components/ScrollProcess'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, next, prev, children }: LayoutProps) {
  const { path, slug, date, lastUpdateDate, title, tags } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <ScrollProcess />
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle viewTransitionName={title}>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0">
            <div className="divide-gray-200 dark:divide-gray-700 max-xl:divide-y xl:pb-0">
              {content.toc.length > 0 && (
                <div className="top-20 overflow-visible max-2xl:py-4 2xl:sticky">
                  <div className="2xl:absolute 2xl:-left-72 2xl:w-64">
                    <h2 className="mb-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
                      目录
                    </h2>
                    <nav className="text-sm">
                      <TOCInline
                        toc={content.toc}
                        liClassName="text-primary-500 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 post-layout-toc"
                      />
                    </nav>
                  </div>
                </div>
              )}
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">{children}</div>
            </div>
          </div>
          <div className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0">
            {lastUpdateDate && (
              <dl className="p-2 text-end">
                <div>
                  <dd className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
                    最后更新于
                    <time dateTime={lastUpdateDate}>
                      {new Date(lastUpdateDate).toLocaleDateString(
                        siteMetadata.locale,
                        postDateTemplate
                      )}
                    </time>
                  </dd>
                </div>
              </dl>
            )}
            {siteMetadata.comments && (
              <div className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300" id="comment">
                <Comments slug={slug} />
              </div>
            )}
          </div>
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
                <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
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
