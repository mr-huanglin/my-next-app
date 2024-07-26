/*
 * @Date: 2024-07-23 11:59:13
 * @LastEditTime: 2024-07-26 18:16:30
 */
'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import DefaultLayout from '@/layouts/layout.js'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { usePathname } from 'next/navigation'
import BaseHead from './head'
import '@/style/index.scss'
import locale from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import { ConfigProvider } from 'antd'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const isLoginPage = pathname === '/login'
  return (
    <html lang='zh-cn'>
      <BaseHead />
      <body className={inter.className}>
        <ConfigProvider locale={locale}>
          <AntdRegistry>
            {isLoginPage ? children : <DefaultLayout>{children}</DefaultLayout>}
          </AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  )
}
