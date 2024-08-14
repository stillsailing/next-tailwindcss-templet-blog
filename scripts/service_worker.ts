import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { StaleWhileRevalidate, NetworkFirst } from 'workbox-strategies'

const UsedStrategy = process.env.NODE_ENV === 'development' ? NetworkFirst : StaleWhileRevalidate

declare const self: ServiceWorkerGlobalScope

// Precache files
precacheAndRoute(self.__WB_MANIFEST)

// Cache pages
registerRoute(
  ({ request }) => request.mode === 'navigate',
  new UsedStrategy({
    cacheName: 'pages-cache',
  })
)

// Cache static resources
registerRoute(
  ({ request }) =>
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'image',
  new UsedStrategy({
    cacheName: 'static-resources-cache',
  })
)
