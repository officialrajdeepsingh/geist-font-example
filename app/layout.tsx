import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Geist Fonts -- Next.js',
  description: 'Geist Fonts ',
}

export default function RootLayout({ children }: {children: React.ReactNode; }) {
  return (
    <html data-new-gr-c-s-check-loaded={true} data-gr-ext-installed={true} lang={"en"}>
      <body>{children}</body>
    </html>
  )
}
