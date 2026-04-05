import type { Metadata } from 'next'
import { ThemeProvider } from '@/hooks/useTheme'
import './globals.css'

export const metadata: Metadata = {
  title: 'NexCorp — Shaping Digital Futures',
  description: 'Mitra transformasi digital terpercaya untuk bisnis modern.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" data-theme="dark" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
