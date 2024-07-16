/*
 * @Author: huanglin
 * @LastEditTime: 2024-07-12 17:59:28
 */
'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import { NextUIProvider } from '@nextui-org/react'
import DefaultLayout from '@/layouts/default-layout'
import { usePathname } from 'next/navigation'
import BaseHead from './head'
import '@/style/index.scss'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const isLoginPage = pathname === '/login'
  return (
    <html lang='zh-cn'>
      <BaseHead />
      <body className={inter.className}>
        <NextUIProvider>
          {isLoginPage ? children : <DefaultLayout>{children}</DefaultLayout>}
        </NextUIProvider>
      </body>
    </html>
  )
}
