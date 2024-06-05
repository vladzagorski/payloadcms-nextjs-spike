import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { Inter as FontSans } from 'next/font/google'
import React from 'react'
import Link from 'next/link'
import { i18n, type Locale } from "../../../i18n-config";

import '../../globals.css'

type LayoutProps = {
  children: ReactNode,
  params: { locale: Locale };
}

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

const Layout = ({ children, params }: LayoutProps) => {
  return (
    <html lang={params.locale}>
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
