/*
 * @Author: huanglin
 * @LastEditTime: 2024-07-16 23:32:29
 */
'use client'
import LayoutHead from './default-head'
export default function DefaultLayout({ children }) {
  return (
    <div className='w-[100vw] h-[100vh] overflow-y-auto bg-[#fff]'>
      <LayoutHead />
      {children}
    </div>
  )
}
