/*
 * @Author: mr-huanglin
 * @LastEditTime: 2024-07-17 14:33:28
 */

import { proxy } from 'valtio'
import { subscribeKey } from 'valtio/utils'

const isClient = typeof window !== 'undefined'

export const userStore = proxy({
  info: {},
  token: isClient ? localStorage.getItem('token') || '' : '',
  setToken: (token) => {
    userStore.token = token
  }
})

subscribeKey(userStore, 'token', (value) => {
  console.log('TCL: value', value)
  localStorage.setItem('token', userStore.token)
})
