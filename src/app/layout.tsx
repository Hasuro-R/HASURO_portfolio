import ColorThemeProvider from '@/middleware/ColorThemeProvider'
import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

const siteName = 'HASURO';
const description = 'HASUROのポートフォリオです。';
const url = 'https://hasuro.com';

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className='all-container'>
          <ColorThemeProvider>
            {children}
            <Footer />
          </ColorThemeProvider>
        </div>
      </body>
    </html>
  );
}
