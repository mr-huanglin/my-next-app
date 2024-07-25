/*
 * @Author: mr-huanglin
 * @LastEditTime: 2024-07-25 11:33:06
 */
import { proxy } from 'valtio'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'

const isClient = typeof window !== 'undefined'

export const appStore = proxy({
  collapsed: false,
  routes: [
    {
      key: '/home',
      icon: <UserOutlined />,
      label: 'nav 1'
    },
    {
      key: '/login',
      icon: <VideoCameraOutlined />,
      label: 'nav 2'
    },
    {
      key: '/3',
      icon: <UploadOutlined />,
      label: 'nav 3'
    }
  ],
  defaultSelectedKeys: '/home',
  setCollapsed: (collapsed) => {
    appStore.collapsed = collapsed
  },
  setRoutes: (routes) => {
    appStore.routes = routes
  },
  setDefaultSelectedKeys: (defaultSelectedKeys) => {
    appStore.defaultSelectedKeys = defaultSelectedKeys
  }
})
