import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { Vercel } from '@/components/social-icons/icons'

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
        <div className="mb-2 flex gap-1">
          <div>{siteMetadata.headerTitle}</div>
          <div>{'©'}</div>
          <div>{new Date().getFullYear()}</div>
        </div>
        <div className="mb-6 flex gap-2 text-xs">
          Powered By
          <Link href="https://vercel.com" className="flex items-center gap-1 ">
            <Vercel className="h-3 w-3 fill-current" />
            <text className="underline-offset-2 hover:text-primary-400 hover:underline">
              Vercel
            </text>
          </Link>
        </div>
      </div>
    </footer>
  )
}
