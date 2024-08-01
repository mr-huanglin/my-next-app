/*
 * @Author: mr-huanglin
 * @LastEditTime: 2024-07-31 11:32:25
 */

import { proxy } from 'valtio'
import routes from '@/route'
import { subscribeKey } from 'valtio/utils'

const isClient = typeof window !== 'undefined'

export const appStore = proxy({
  collapsed: false,
  routes,
  setCollapsed: (collapsed) => {
    appStore.collapsed = collapsed
  },
  setRoutes: (routes) => {
    appStore.routes = routes
  }
})

if (isClient) {

}
