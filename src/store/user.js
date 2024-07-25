/*
 * @Author: mr-huanglin
 * @LastEditTime: 2024-07-25 11:19:06
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
  localStorage.setItem('token', userStore.token)
})
