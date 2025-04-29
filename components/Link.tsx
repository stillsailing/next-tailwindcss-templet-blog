import { correctViewTransitionName } from 'app/util'
import { Link } from 'next-view-transitions'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'

const CustomLink = ({
  href,
  children,
  viewTransitionName,
  ...rest
}: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement> & { viewTransitionName?: string }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link
        className="break-words"
        href={href}
        style={{
          viewTransitionName: viewTransitionName
            ? correctViewTransitionName(viewTransitionName)
            : undefined,
        }}
        {...rest}
      >
        {children}
      </Link>
    )
  }

  if (isAnchorLink) {
    return (
      <a className="break-words" href={href} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <a className="break-words" target="_blank" rel="noopener noreferrer" href={href} {...rest}>
      {children}
    </a>
  )
}

export default CustomLink
