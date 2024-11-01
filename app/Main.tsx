import NewsletterForm from 'pliny/ui/NewsletterForm'
import { CoreContent } from 'pliny/utils/contentlayer'
import { formatDate } from 'pliny/utils/formatDate'

import { Blog } from 'contentlayer/generated'

import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'

const MAX_DISPLAY = 4

export default function Home({ posts }: { posts: CoreContent<Blog>[] }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="bg-gradient-to-r from-primary-400 to-red-500 bg-clip-text pb-8  font-bold text-transparent">
          <h2 className="text-3xl">Welcome!</h2>
          <h3 className="text-2xl">Keep The Passion For Creating.</h3>
        </div>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-12">
            最近更新
          </h1>
        </div>
        <ul className="divide-y divide-gray-200 py-2 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    </dd>
                  </dl>
                  <div className="space-y-2 xl:col-span-3">
                    <h2 className="text-2xl font-bold leading-8 tracking-tight">
                      <Link
                        href={`/blog/${slug}`}
                        className="text-gray-900 transition hover:text-primary-500 dark:text-gray-100"
                        viewTransitionName={title}
                      >
                        {title}
                      </Link>
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {summary}
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-center text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="查看全部"
          >
            查看全部
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
