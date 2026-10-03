import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BakoAI',
  description: 'Қандыағаштан шыққан тұңғыш AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kk">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
