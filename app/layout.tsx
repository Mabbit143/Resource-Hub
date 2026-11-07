import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Anton, Caveat, Roboto, Roboto_Condensed, Roboto_Mono } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const anton = Anton({ weight: '400', subsets: ['latin'], variable: '--font-anton', display: 'swap' })
const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'], variable: '--font-roboto', display: 'swap' })
const robotoCondensed = Roboto_Condensed({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
  display: 'swap',
})
const robotoMono = Roboto_Mono({ weight: ['400', '500'], subsets: ['latin'], variable: '--font-roboto-mono', display: 'swap' })
const caveat = Caveat({ weight: '600', subsets: ['latin'], variable: '--font-caveat', display: 'swap' })
const fontVars = [anton, roboto, robotoCondensed, robotoMono, caveat].map((f) => f.variable).join(' ')

const SITE_URL = 'https://da-resource-central.vercel.app'
const TITLE = 'Resource Central — Deconstructing Academia'
const DESCRIPTION =
  'A list of resources for non-traditional students, first-generation students, and prison-to-higher-ed students. Compiled by Mabbit Rountree.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Deconstructing Academia',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: '/images/da-logo.png', width: 320, height: 320, alt: 'Deconstructing Academia' }],
  },
  twitter: {
    card: 'summary',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/images/da-logo.png'],
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0D0B12',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={fontVars}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
