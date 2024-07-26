/*
 * @Date: 2024-07-26 14:25:32
 * @LastEditTime: 2024-07-26 15:13:16
 */

import { Layout, Menu } from 'antd'
import { appStore } from '@/store'
import { useSnapshot } from 'valtio'
import { useRouter } from 'next/navigation'
const { Sider } = Layout

const Aside = () => {
  const { collapsed, routes, defaultSelectedKeys, setDefaultSelectedKeys } =
    useSnapshot(appStore)

  const router = useRouter()

  const clickMenu = (e) => {
    setDefaultSelectedKeys([e.key])
    router.push(e.key)
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
        defaultSelectedKeys={defaultSelectedKeys ?? ['/home']}
        items={routes}
        onClick={clickMenu}
      />
    </Sider>
  )
}
export default Aside
