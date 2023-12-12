import '@styles/globals.css'
import { cn } from '@utils/tailwind'
import { Inter } from 'next/font/google'

import type { Metadata } from 'next'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thread Docs',
  description: 'Official Documentation for python thread library'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={cn(inter.className, 'flex min-h-screen w-screen max-w-full')}>
        <main className='flex flex-col flex-auto'>
          {/* Navbar */}
          {children}
          {/* Footer */}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
