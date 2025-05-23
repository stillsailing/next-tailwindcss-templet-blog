import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import 'css/component.css'
import 'css/tailwind.css'
import 'css/transition.css'
import { Metadata } from 'next'
import { ViewTransitions } from 'next-view-transitions'
import dynamic from 'next/dynamic'
import { Space_Grotesk, Ubuntu, Ubuntu_Mono, Bungee_Shade } from 'next/font/google'
import LocalFont from 'next/font/local'
import Script from 'next/script'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider, SearchConfig } from 'pliny/search'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'

import { ThemeProviders } from './theme-providers'

const RegisterServiceWorker = dynamic(() => import('@/components/RegisterServiceWorker'), {
  ssr: false,
})

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

const ubuntu = Ubuntu({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',
  weight: ['300', '400'],
})

const ubuntu_mono = Ubuntu_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu-mono',
  weight: ['400', '700'],
})

const bungee_shade = Bungee_Shade({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bungee-shade',
  weight: '400',
})

// const lxgw = LocalFont({
//   src: '../font/LXGWWenKaiLite-Regular.ttf',
//   weight: '500',
//   display: 'swap',
//   variable: '--font-lxgw',
// })

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: siteMetadata.language,
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.BASE_PATH || ''

  return (
    <ViewTransitions>
      <html
        lang={siteMetadata.language}
        className={`${space_grotesk.variable} ${ubuntu.variable} ${ubuntu_mono.variable} ${bungee_shade.variable} scroll-smooth`}
        suppressHydrationWarning
      >
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={`${basePath}/static/favicons/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${basePath}/static/favicons/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${basePath}/static/favicons/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${basePath}/static/favicons/site.webmanifest`} />
        <link
          rel="mask-icon"
          href={`${basePath}/static/favicons/safari-pinned-tab.svg`}
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
        <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />
        <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white">
          <ThemeProviders>
            <SpeedInsights />
            <VercelAnalytics />
            <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
            <SectionContainer>
              <div className="flex min-h-screen flex-col justify-between font-sans">
                <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
                  <Header />
                  <main className="mb-auto">{children}</main>
                </SearchProvider>
                <Footer />
              </div>
            </SectionContainer>
          </ThemeProviders>
          <Script
            id="debug-message"
            dangerouslySetInnerHTML={{
              __html:
                'window["__debug__"] = { umami: "https://eu.umami.is/websites/471bfa44-fec2-42cf-9890-aed2248ebba4" }',
            }}
          />
        </body>
      </html>
    </ViewTransitions>
  )
}
