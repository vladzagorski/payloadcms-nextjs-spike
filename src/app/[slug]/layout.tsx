import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { Inter as FontSans } from 'next/font/google'
import React from 'react'
import Link from 'next/link'

type LayoutProps = {
  children: ReactNode
}

import './globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <nav className="sticky top-0 bg-white">
          <ul className="flex gap-x-6 border p-3">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/partners">Partners</Link>
            </li>
          </ul>
        </nav>

        {children}
      </body>
    </html>
  )
}

export default Layout
