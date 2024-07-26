/*
 * @Date: 2024-07-25 10:50:53
 * @LastEditTime: 2024-07-26 15:08:44
 */

'use client'
import dynamic from 'next/dynamic'
import { Layout } from 'antd'
import { useSnapshot } from 'valtio'
import { userStore } from '@/store'
import { useEffect } from 'react'

const { Content } = Layout

const DefaultAside = dynamic(() => import('./aside'), {
  ssr: false
})

const DefaultContent = dynamic(() => import('./content'), {
  ssr: false
})

const DefaultHeader = dynamic(() => import('./header'), {
  ssr: false
})

const DefaultLayout = ({ children }) => {
  const { getUserInfo } = useSnapshot(userStore)

  useEffect(() => {
    getUserInfo()
  }, [getUserInfo])

  return (
    <Layout className='w-[100vw] h-[100vh]'>
      <DefaultAside />
      <Layout>
        <DefaultHeader />
        <DefaultContent>{children}</DefaultContent>
      </Layout>
    </Layout>
  )
}
export default DefaultLayout
