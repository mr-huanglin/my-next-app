/*
 * @Author: mr-huanglin
 * @LastEditTime: 2024-07-25 14:07:04
 */
import { proxy } from 'valtio'
import routes from '@/route'

const isClient = typeof window !== 'undefined'

export const appStore = proxy({
  collapsed: false,
  routes,
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
