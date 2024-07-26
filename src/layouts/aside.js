/*
 * @Date: 2024-07-26 14:25:32
 * @LastEditTime: 2024-07-26 18:35:58
 */

import { Layout, Menu } from 'antd'
import { appStore } from '@/store'
import { useSnapshot } from 'valtio'
import { useRouter } from 'next/navigation'
const { Sider } = Layout

const Aside = () => {
  const {
    collapsed,
    routes,
    defaultSelectedKeys,
    setDefaultSelectedKeys,
    defaultOpenKeys,
    setDefaultOpenKeys
  } = useSnapshot(appStore)

  console.log('TCL: Aside -> defaultOpenKeys', defaultOpenKeys)

  const router = useRouter()

  const clickMenu = (e) => {
    setDefaultSelectedKeys([e.key])
    router.push(e.key)
  }
  const onOpenChange = (keys) => {
    setDefaultOpenKeys(keys)
  }

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
        defaultSelectedKeys={defaultSelectedKeys}
        defaultOpenKeys={defaultOpenKeys}
        items={routes}
        onClick={clickMenu}
        onOpenChange={onOpenChange}
      />
    </Sider>
  )
}
export default Aside
