import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jorun Skålnes',
  description: 'Jorun Skålnes portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no">
      <head>
      <meta name="keywords" content="interaksjonsdesign" />
      <meta name="description" content="Joruns portfolio" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
