import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { twMerge } from 'tailwind-merge'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vai Vai Telecom',
  description: 'Mobile phone store',
}

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, 'bg-gray-100')}>
        {children}
      </body>
    </html>
  )
}
