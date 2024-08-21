import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import { Vercel } from '@/components/social-icons/icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center text-sm text-gray-500 dark:text-gray-400">
        <div className="mb-2 flex gap-1">
          <div>{siteMetadata.headerTitle}</div>
          <div>{'©'}</div>
          <div>{new Date().getFullYear()}</div>
          <div>{'|'}</div>
          <a
            className="text-sm text-primary-500 underline-offset-2 transition hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href={'/feed.xml'}
          >
            RSS feed
          </a>
          <div>{'|'}</div>
          <div>
            Template from&nbsp;
            <a
              className="text-sm text-primary-500 underline-offset-2 transition hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href={'https://github.com/timlrx/tailwind-nextjs-starter-blog'}
            >
              here
            </a>
          </div>
        </div>
        <div className="mb-6 flex gap-2 text-xs">
          Powered By
          <Link href="https://vercel.com" className="flex items-center gap-1 ">
            <Vercel className="h-3 w-3 fill-current" />
            <text className="text-primary-500 underline-offset-2 hover:underline">Vercel</text>
          </Link>
        </div>
      </div>
    </footer>
  )
}
