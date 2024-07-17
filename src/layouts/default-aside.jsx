/*
 * @Author: mr-huanglin
 * @LastEditTime: 2024-07-17 14:16:03
 */

import { Layout, Menu } from 'antd'
import { useAppStore } from '@/store'
import { useSnapshot } from 'valtio'
import { useCustomRouter } from '@/hooks'

const { Sider } = Layout

const DefaultAside = () => {
  const { collapsed, routes, defaultSelectedKeys } = useSnapshot(useAppStore)
  const { useRouter } = useCustomRouter()
  const router = useRouter()

  const clickMenu = (e) => {
    router.push(e.key)
  }

  return (
    <Sider
      theme='light'
      trigger={null}
      collapsible
      collapsed={collapsed}
      className='h-[100vh]'
    >
      <div className='demo-logo-vertical' />
      <Menu
        theme='light'
        mode='inline'
        selectedKeys={[defaultSelectedKeys]}
        items={routes}
        onClick={clickMenu}
      />
    </Sider>
  )
}
export default DefaultAside
