'use client'

/**
 * 评论组件
 */
import { init } from '@waline/client'
import '@waline/client/style'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { useLayoutEffect } from 'react'

import '@/css/waline.css'
import { WalineConfig } from '@/data/data'

const Waline = ({ server }: WalineConfig['walineConfig']) => {
  const path = usePathname()
  const { resolvedTheme } = useTheme()

  useLayoutEffect(() => {
    const waline = init({
      serverURL: server,
      el: '#waline',
      path,
      dark: resolvedTheme === 'dark',
    })
    return () => waline?.destroy()
  }, [path, resolvedTheme, server])

  return <div id="waline" className="waline-container"></div>
}

export default Waline
