/*
 * @Author: huanglin
 * @LastEditTime: 2024-07-12 17:45:39
 */
'use client'
import LayoutHead from './default-head'
export default function DefaultLayout({ children }) {
  return (
    <div className='w-[100vw] h-[100vh] overflow-y-auto'>
      <LayoutHead />
      {children}
    </div>
  )
}
