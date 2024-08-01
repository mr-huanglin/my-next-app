/*
 * @Date: 2024-07-26 14:25:32
 * @LastEditTime: 2024-07-31 11:53:13
 */
import { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd'
import { appStore } from '@/store'
import { useSnapshot } from 'valtio'
import { useRouter, usePathname } from 'next/navigation'
const { Sider } = Layout

const Aside = () => {
  const { collapsed, routes } = useSnapshot(appStore)
  const pathname = usePathname()
  const router = useRouter()
  const [openKeys, setOpenKeys] = useState([])

  const clickMenu = (e) => {
    router.push(e.key)
  }

  const onOpenChange = (keys) => {
    setOpenKeys(keys)
    localStorage.setItem('openKeys', JSON.stringify(keys))
  }

  useEffect(() => {
    if (localStorage.getItem('openKeys')) {
      const currentKeys = JSON.parse(localStorage.getItem('openKeys'))
      setOpenKeys(() => currentKeys)
    }
  }, [])

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme='light'
      style={{ minWidth: '200px' }}
    >
      <div className='demo-logo-vertical' />
      <Menu
        theme='light'
        mode='inline'
        defaultSelectedKeys={pathname}
        openKeys={openKeys}
        items={routes}
        onClick={clickMenu}
        onOpenChange={onOpenChange}
      />
    </Sider>
  )
}
export default Aside
