/*
 * @Author: mr-huanglin
 * @LastEditTime: 2024-07-17 11:58:34
 */
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
const { Sider } = Layout
import { useAppStore } from '@/store'
import { useSnapshot } from 'valtio'
import { useRouter } from 'next/navigation'
const DefaultAside = () => {
  const { collapsed, routes, defaultSelectedKeys } = useSnapshot(useAppStore)
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
