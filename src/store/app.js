/*
 * @Author: mr-huanglin
 * @LastEditTime: 2024-07-17 11:57:50
 */
import { proxy } from 'valtio'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'

export const useAppStore = proxy({
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
  defaultSelectedKeys: '',
  setCollapsed: (collapsed) => {
    useAppStore.collapsed = collapsed
  },
  setRoutes: (routes) => {
    useAppStore.routes = routes
  },
  setDefaultSelectedKeys: (defaultSelectedKeys) => {
    useAppStore.defaultSelectedKeys = defaultSelectedKeys
  }
})
