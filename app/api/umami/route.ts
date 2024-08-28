import siteMetadata from '@/data/siteMetadata'

async function handler(path: string) {
  const websiteId = siteMetadata.analytics?.umamiAnalytics?.umamiWebsiteId
  const token = process.env.UMAMI_API_KEY
  let endpoint = `https://api.umami.is/api/websites/${websiteId}/metrics?type=pageviews`

  const params = {
    startAt: 0,
    endAt: Date.now(),
    unit: 'month',
    url: path,
  }

  Object.keys(params).forEach((key) => {
    endpoint += `&${key}=${params[key]}`
  })

  let visitCount = 0

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    visitCount = data.reduce((total, item) => total + item.count, 0)
  } catch (error) {
    console.error('Error fetching visit count:', error)
  }

  return visitCount
}

export { handler as GET }
