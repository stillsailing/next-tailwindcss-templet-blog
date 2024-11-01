import { NextRequest, NextResponse } from 'next/server'

import siteMetadata from '@/data/siteMetadata'

async function handler(req: NextRequest) {
  const searchs = new URL(req.url).searchParams
  const websiteId = siteMetadata.analytics?.umamiAnalytics?.umamiWebsiteId
  const token = process.env.UMAMI_API_SHARE_TOKEN
  let endpoint = `https://analytics.umami.is/api/websites/${websiteId}/pageviews?startAt=1704067200000`

  const params = {
    endAt: Date.now(),
    unit: 'month',
    timezone: 'Asia/Shanghai',
    url: searchs.get('path'),
  }

  Object.keys(params).forEach((key) => {
    endpoint += `&${key}=${encodeURIComponent(params[key])}`
  })

  let pageviews = 0

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-umami-share-token': `${token}`,
      },
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    pageviews = data.pageviews.reduce((total, item) => total + item.y, 0)
  } catch (error) {
    console.error('Error fetching visit count:', error)
  }

  return new NextResponse(`${pageviews}`)
}

export { handler as GET }
