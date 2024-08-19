'use client'

import { correctViewTransitionName } from 'app/util'
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'
import { AnchorHTMLAttributes, MouseEvent, useRef } from 'react'
import { flushSync } from 'react-dom'

const InternalLink = ({
  href,
  viewTransitionName,
  ...rest
}: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement> & { viewTransitionName?: string }) => {
  const router = useRouter()
  const ref = useRef<HTMLAnchorElement>(null)
  const navigate = async (event: MouseEvent<HTMLAnchorElement>) => {
    if (!document.startViewTransition) {
      return
    }
    event.preventDefault()
    if (ref.current) {
      ref.current.style.viewTransitionName = correctViewTransitionName(viewTransitionName)
      document.startViewTransition(() => {
        flushSync(() => {
          router.push(href)
        })
      })
    }
  }

  return <Link ref={ref} href={href} onClick={navigate} {...rest} />
}

export default InternalLink
