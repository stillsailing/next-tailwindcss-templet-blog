import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Category = ({ children }: Props) => {
  return (
    <span className="bg-slate-200 dark:bg-slate-600 dark:from-neutral-100 px-2 py-1 rounded-3xl text-xs font-bold">
      {children}
    </span>
  )
}

export default Category
