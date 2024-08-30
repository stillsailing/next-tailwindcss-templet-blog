import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { CoreContent } from 'pliny/utils/contentlayer'
import { Blog } from 'contentlayer/generated'
import Image from 'next/image'

const MAX_DISPLAY = 3

export default function Home({ posts }: { posts: CoreContent<Blog>[] }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="bg-gradient-to-r from-primary-400 to-red-500 bg-clip-text pb-8  font-bold text-transparent">
          <h2 className="text-3xl">Welcome! My Friends!</h2>
          <h3 className="text-xl">Keep The Passion For Creating.</h3>
        </div>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-12">
            最近更新
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-gray-200 py-2 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags, images } = post
            const displayImage = images?.length > 0 && images[0]
            return (
              <li
                key={slug}
                className="my-4 overflow-hidden rounded-md border transition-shadow duration-200 hover:shadow-md"
              >
                <article>
                  <div className="space-y-2 lg:flex lg:items-center">
                    {displayImage && (
                      <div className="aspect-square max-w-72 max-lg:hidden">
                        <Image
                          className="h-full w-full object-cover"
                          src={displayImage}
                          height={1978}
                          width={3450}
                          alt={`「${title}」's banner`}
                        />
                      </div>
                    )}
                    <div className="flex-1 space-y-2 p-6 pl-4">
                      <div className="space-y-2">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                              viewTransitionName={title}
                            >
                              {title}
                            </Link>
                          </h2>
                          <dl className="ml-2 mt-2">
                            <dt className="sr-only">Published on</dt>
                            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                              <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                            </dd>
                          </dl>
                          <div className="ml-2 flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-right text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`阅读全文: "${title}"`}
                        >
                          阅读全文 &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="所有 Blog"
          >
            所有 Blog &rarr;
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
