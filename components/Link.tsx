/* eslint-disable jsx-a11y/anchor-has-content */
import { correctViewTransitionName } from 'app/util'
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, CSSProperties } from 'react'

const CustomLink = ({
  href,
  viewTransitionName,
  ...rest
}: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement> & { viewTransitionName?: string }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  function getComposedStyle() {
    const style: CSSProperties = {}
    if (rest?.style) {
      Object.assign(style, rest.style)
    }
    if (viewTransitionName) {
      Object.assign(style, {
        viewTransitionName: correctViewTransitionName(viewTransitionName),
      })
    }
    return style
  }
  const composedStyle = getComposedStyle()

  if (isInternalLink) {
    return <Link className="break-words" href={href} {...rest} style={composedStyle} />
  }

  if (isAnchorLink) {
    return <a className="break-words" href={href} {...rest} />
  }

  return (
    <a className="break-words" target="_blank" rel="noopener noreferrer" href={href} {...rest} />
  )
}

export default CustomLink
