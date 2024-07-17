/*
 * @Author: huanglin
 * @LastEditTime: 2024-07-17 11:48:44
 */
'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import DefaultLayout from '@/layouts/default-layout.jsx'
import { AntdRegistry } from '@ant-design/nextjs-registry'
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
        <AntdRegistry>
          {isLoginPage ? children : <DefaultLayout>{children}</DefaultLayout>}
        </AntdRegistry>
      </body>
    </html>
  )
}
