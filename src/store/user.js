/*
 * @Author: mr-huanglin
 * @LastEditTime: 2024-07-27 11:32:08
 */

import { proxy } from 'valtio'
import { subscribeKey } from 'valtio/utils'
import { useHttp } from '@/hooks'

const isClient = typeof window !== 'undefined'

export const userStore = proxy({
  info: {},
  async getUserInfo() {
    const { result } = await useHttp('/restApi/member/info')
    userStore.info = result
    console.log('TCL: getUserInfo ->  userStore.info', userStore.info)
  },
  setToken: (token) => {
    localStorage.setItem('token', token)
  }
})
