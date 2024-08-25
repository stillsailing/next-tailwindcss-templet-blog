'use client'

/**
 * 评论组件
 */
import { WalineConfig } from '@/data/data'
import { useLayoutEffect } from 'react'
import { init } from '@waline/client'
import { usePathname } from 'next/navigation'
import '@waline/client/style'

const Waline = ({ server }: WalineConfig['walineConfig']) => {
  const path = usePathname()

  useLayoutEffect(() => {
    const waline = init({
      serverURL: server,
      el: '#waline',
      path,
    })
    return () => waline?.destroy()
  }, [path])

  return <div id="waline"></div>
}

export default Waline
