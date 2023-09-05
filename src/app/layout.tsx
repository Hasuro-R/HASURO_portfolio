import ColorThemeProvider from '@/middleware/ColorThemeProvider'
import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HASURO',
  description: 'HASUROのポートフォリオです。',
}

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
