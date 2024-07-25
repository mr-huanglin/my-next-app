/*
 * @Author: mr-huang
 * @LastEditTime: 2024-07-25 11:34:06
 */
'use client'

import { useEffect } from 'react'
import { appStore } from '@/store'
import { useSnapshot } from 'valtio'
import { usePathname } from 'next/navigation'

const Content = ({ children }) => {
  const pathName = usePathname()

  const { setDefaultSelectedKeys } = useSnapshot(appStore)

  useEffect(() => {
    setDefaultSelectedKeys(pathName)
  }, [pathName])
  return <div>{children}</div>
}

export default Content
