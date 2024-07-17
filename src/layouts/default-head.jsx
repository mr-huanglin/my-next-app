/*
 * @Author: mr-huanglin
 * @LastEditTime: 2024-07-17 10:57:33
 */
'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { useAppStore } from '@/store'
import { useSnapshot } from 'valtio'

export default function LayoutHead() {
  const { collapsed, setCollapsed } = useSnapshot(useAppStore)

  const [currentActive, setCurrentActive] = useState(1)
  const router = useRouter()
  const onClick = () => {
    setCollapsed(!collapsed)
  }
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1' onClick={onClick}>
        <a className='btn btn-ghost text-xl'>daisyUI</a>
      </div>
      <div className='flex-none gap-2'>
        <div className='form-control'>
          <input
            type='text'
            placeholder='Search'
            className='input input-bordered w-24 md:w-auto'
          />
        </div>
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
          >
            <div className='w-10 rounded-full'>
              <img
                alt='Tailwind CSS Navbar component'
                src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
          >
            <li>
              <a className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
