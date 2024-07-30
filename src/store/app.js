/*
 * @Author: mr-huanglin
 * @LastEditTime: 2024-07-30 17:53:30
 */

import { proxy } from 'valtio'
import routes from '@/route'
import { subscribeKey } from 'valtio/utils'

const isClient = typeof window !== 'undefined'

export const appStore = proxy({
  collapsed: false,
  routes,
  defaultSelectedKeys: isClient
    ? localStorage.getItem('defaultSelectedKeys') ?? '/home'
    : '/home',

  defaultOpenKeys: isClient
    ? localStorage.getItem('defaultOpenKeys') ?? null
    : null,
  setCollapsed: (collapsed) => {
    appStore.collapsed = collapsed
  },
  setRoutes: (routes) => {
    appStore.routes = routes
  },
  setDefaultSelectedKeys: (defaultSelectedKeys) => {
    appStore.defaultSelectedKeys = defaultSelectedKeys
  },
  setDefaultOpenKeys: (defaultOpenKeys) => {
    appStore.defaultOpenKeys = defaultOpenKeys
  }
})

if (isClient) {
  subscribeKey(appStore, 'defaultSelectedKeys', (key) => {
    localStorage.setItem('defaultSelectedKeys', key)
  })

  subscribeKey(appStore, 'defaultOpenKeys', (key) => {
    localStorage.setItem('defaultOpenKeys', [key])
  })
}
