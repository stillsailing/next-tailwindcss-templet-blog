import siteMetadata from '@/data/siteMetadata'
import { NextRequest, NextResponse } from 'next/server'

async function handler(req: NextRequest) {
  const controller = new AbortController()
  const timeout = setTimeout(() => {
    controller.abort()
  }, 10000) // 设置10秒超时

  const searchs = new URLSearchParams(req.url)
  const websiteId = siteMetadata.analytics?.umamiAnalytics?.umamiWebsiteId
  const token = process.env.UMAMI_API_KEY
  let endpoint = `https://cloud.umami.is/api/websites/${websiteId}/pageviews?startAt=0`

  console.log('searchs.get(path)', req.url, searchs.get('path'))

  const params = {
    endAt: Date.now(),
    unit: 'year',
    url: '/blog/service-worker',
  }

  Object.keys(params).forEach((key) => {
    endpoint += `&${key}=${params[key]}`
  })

  console.log(endpoint)

  let visitCount = 0

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    })
    clearTimeout(timeout)

    console.log(await response.json())

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    visitCount = data.reduce((total, item) => total + item.count, 0)
  } catch (error) {
    console.error('Error fetching visit count:', error)
  }

  return new NextResponse(`${visitCount}`)
}

export { handler as GET }
