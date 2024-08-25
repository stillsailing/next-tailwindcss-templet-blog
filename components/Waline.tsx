'use client'

/**
 * 评论组件
 */
import { WalineConfig } from '@/data/data'
import { useLayoutEffect } from 'react'
import { init } from '@waline/client'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import '@waline/client/style'

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
  }, [path, resolvedTheme])

  return <div id="waline" className="waline-container"></div>
}

export default Waline
