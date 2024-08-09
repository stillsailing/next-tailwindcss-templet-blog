import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { StaleWhileRevalidate, NetworkFirst } from 'workbox-strategies'

// Precache files
// precacheAndRoute(self.__WB_MANIFEST, {
//   // 忽略 404 错误
//   ignoreURLParametersMatching: [/.*/],
//   cleanURLs: false,
//   directoryIndex: null,
//   urlManipulation: ({ url }) => {
//     if (url.pathname.endsWith('/_next/app-build-manifest.json')) {
//       return null // 忽略该文件
//     }
//     return [url]
//   },
// })

// Cache pages
// registerRoute(
//   ({ request }) => request.mode === 'navigate',
//   new StaleWhileRevalidate({
//     cacheName: 'pages-cache',
//   })
// )

// Cache static resources
registerRoute(
  ({ request }) =>
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'image',
  new StaleWhileRevalidate({
    cacheName: 'static-resources-cache',
  })
)
