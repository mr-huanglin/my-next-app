/*
 * @Author: mr-huang
 * @LastEditTime: 2024-07-25 14:20:46
 */
'use client'

import { useEffect } from 'react'
import { appStore, userStore } from '@/store'
import { useSnapshot } from 'valtio'
import { usePathname, useRouter } from 'next/navigation'

const Content = ({ children }) => {
  const pathName = usePathname()
  const router = useRouter()
  const { token: userToken } = useSnapshot(userStore)

  const { setDefaultSelectedKeys } = useSnapshot(appStore)

  const checkUser = () => {
    if (pathName === '/') {
      return true
    } else if (!userToken) {
      router.push('/')
    }
  }

  useEffect(() => {
    checkUser()
    setDefaultSelectedKeys(pathName)
  }, [pathName])
  return <div>{children}</div>
}

export default Content
