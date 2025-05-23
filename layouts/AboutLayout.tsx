import { ReactNode } from 'react'

import type { Author } from 'contentlayer/generated'

import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Author, '_id' | '_raw' | 'body'>
}

export default function AboutLayout({ children, content }: Props) {
  const { name, avatar } = content

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          About
        </h1>
      </div>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center space-x-2 pt-8">
          {avatar && (
            <div className="avatar">
              <div className="mask mask-squircle w-32 bg-primary-100 p-5 dark:bg-primary-900">
                <Image
                  src={avatar}
                  alt="avatar"
                  width={192}
                  height={192}
                  className="h-48 w-48 rounded-full"
                />
              </div>
            </div>
          )}
          <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
        </div>
        <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">{children}</div>
      </div>
    </div>
  )
}
