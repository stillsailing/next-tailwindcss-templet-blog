import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { StaleWhileRevalidate, NetworkFirst } from 'workbox-strategies'

// Precache files
precacheAndRoute(self.__WB_MANIFEST, {
  urlManipulation: (url) => {
    if (url.url.pathname.includes('/_next/app-build-manifest.json')) {
      return null
    }
    return [url]
  },
})

// Cache pages
registerRoute(
  ({ request }) => request.mode === 'navigate',
  new NetworkFirst({
    cacheName: 'pages-cache',
  })
)

// Cache static resources
registerRoute(
  ({ request }) =>
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'image',
  new NetworkFirst({
    cacheName: 'static-resources-cache',
  })
)
