/*
 * @Author: mr-huang
 * @LastEditTime: 2024-07-25 10:53:05
 */
/*
 * @Author: huanglin
 * @LastEditTime: 2024-07-25 10:49:50
 */
'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import DefaultLayout from '@/layouts/layout.js'
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
