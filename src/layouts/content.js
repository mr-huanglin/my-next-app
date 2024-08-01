/*
 * @Author: mr-huang
 * @LastEditTime: 2024-07-31 11:33:09
 */
'use client'

import { Layout, theme } from 'antd'
import { useEffect } from 'react'
import { appStore, userStore } from '@/store'
import { useSnapshot } from 'valtio'
import { usePathname, useRouter } from 'next/navigation'

const { Content } = Layout

const ContentLayout = ({ children }) => {
  const pathName = usePathname()
  const router = useRouter()
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  const checkUser = () => {
    if (pathName === '/') {
      return true
    } else if (!localStorage.getItem('token')) {
      router.push('/')
    }
  }

  useEffect(() => {
    checkUser()
  }, [pathName])
  return (
    <Content
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
        overflowY: 'auto',

        borderRadius: borderRadiusLG,
        boxSizing: 'border-box'
      }}
    >
      {children}
    </Content>
  )
}

export default ContentLayout
