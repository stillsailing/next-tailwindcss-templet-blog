import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="mx-auto max-w-3xl px-2 sm:px-1 xl:max-w-6xl xl:px-0">{children}</section>
  )
}
