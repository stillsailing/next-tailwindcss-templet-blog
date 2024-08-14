import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { Nextjs, TailwindCSS, Vercel } from '@/components/social-icons/icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center text-sm text-gray-500 dark:text-gray-400">
        <div className="mb-3 flex gap-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          <SocialIcon kind="x" href={siteMetadata.x} size={6} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          <SocialIcon kind="threads" href={siteMetadata.threads} size={6} />
        </div>
        <div className="mb-2 flex space-x-2">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
        <div className="mb-6 flex gap-2">
          <Link href="https://nextjs.org" className="flex items-center gap-1">
            <Nextjs className="h-4 w-4 fill-current" />
            Nextjs
          </Link>
          <div>{` • `}</div>
          <Link href="https://tailwindcss.com" className="flex items-center gap-1">
            <TailwindCSS className="h-4 w-4 fill-current" />
            TailwindCSS
          </Link>
          <div>{` • `}</div>
          <Link href="https://vercel.com" className="flex items-center gap-1">
            <Vercel className="h-4 w-4 fill-current" />
            Vercel
          </Link>
        </div>
      </div>
    </footer>
  )
}
