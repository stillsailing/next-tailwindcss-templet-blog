import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'
import InternalLink from './InternalLink'

const CustomLink = ({
  href,
  ...rest
}: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement> & { viewTransitionName?: string }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return <InternalLink className="break-words" href={href} {...rest} />
  }

  if (isAnchorLink) {
    return <a className="break-words" href={href} {...rest} />
  }

  return (
    <a className="break-words" target="_blank" rel="noopener noreferrer" href={href} {...rest} />
  )
}

export default CustomLink
