import type { Metadata } from 'next'
import './globals.css'
import { NavBar, Footer } from '@/components'

export const metadata: Metadata = {
  title: 'CarHub',
  description: 'Discover the Best Cars in the World.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
