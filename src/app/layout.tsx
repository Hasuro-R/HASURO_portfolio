import ColorThemeProvider from '@/middleware/ColorThemeProvider'
import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import Footer from '@/components/footer/Footer'
import HoverMenu from '@/components/UI/menu/HoverMenu'
import { localKey } from '@/lib/key'
import I18nProvider from '@/middleware/I18nProvider'

const inter = Inter({ subsets: ['latin'] })

const siteName = 'HASURO'
const description = 'HASUROのポートフォリオです。'
const url = 'https://hasuro.com'

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description,
  keywords: 'HASURO はすろ',
  openGraph: {
    title: {
      default: siteName,
      template: `%s - ${siteName}`,
    },
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: siteName,
      template: `%s - ${siteName}`,
    },
    description,
    site: '@HASURO_dev',
    creator: '@HASURO_dev',
  },
  verification: {
    google: `${process.env.GOOGLE_VERIFICATION}`,
  },
  alternates: {
    canonical: url,
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const locale = cookieStore.get(localKey)?.value ?? 'en'

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div className="all-container">
          <ColorThemeProvider>
            <I18nProvider>
              {children}
              <Footer />
              <HoverMenu />
            </I18nProvider>
          </ColorThemeProvider>
        </div>
      </body>
    </html>
  )
}
