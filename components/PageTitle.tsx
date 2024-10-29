import { correctViewTransitionName } from 'app/util'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  viewTransitionName?: string
}

export default function PageTitle({ children, viewTransitionName }: Props) {
  return (
    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
      <span style={{ viewTransitionName: correctViewTransitionName(viewTransitionName) }}>
        {children}
      </span>
    </h1>
  )
}
