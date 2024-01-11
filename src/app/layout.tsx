import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/src/lib/utils'
import './globals.css'
import Navbar from '@/src/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pet Backs Home',
  description: 'We will reunite pets with their family!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body
        className={cn(
          'relative h-full font-sans antialiased',
          inter.className
        )}
      >
        <main className='relative flex flex-col min-h-screen'>
          <Navbar />
          <div className='flex-grow flex-1'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
