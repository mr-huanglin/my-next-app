/*
 * @Author: huanglin
 * @LastEditTime: 2024-07-17 11:53:20
 */
'use client'
import { useEffect } from 'react'
import DefaultAside from './default-aside.jsx'
import { Layout, theme } from 'antd'
import DefaultHead from './default-head.jsx'
const { Content } = Layout
import { useAppStore } from '@/store'
import { useSnapshot } from 'valtio'
import { usePathname } from 'next/navigation'

const DefaultLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()
  const { setDefaultSelectedKeys } = useSnapshot(useAppStore)
  const pathName = usePathname()

  useEffect(() => {
    setDefaultSelectedKeys(pathName)
  }, [pathName])

  return (
    <Layout className='h-[100vh] w-[100vw] overflow-y-scroll'>
      <div className='h-[100%]'>
        <DefaultAside />
      </div>
      <Layout>
        <DefaultHead />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}
export default DefaultLayout
