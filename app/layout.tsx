import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brainfast - The fastest way to learn!',
  description: 'Brainfast is the fastest way to learn! Learn anything in a fraction of the time! 🚀'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
