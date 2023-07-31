import { Footer, Header } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Rent a Car',
  description: 'Generated by Rent a Car',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
