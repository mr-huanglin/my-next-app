// 'use client'
import { useState } from 'react'
import { appStore, userStore } from '@/store'
import { useSnapshot } from 'valtio'
import { useCustomRouter } from '@/hooks'
import { filterImage } from '@/filter'
const Header = () => {
  const { collapsed, setCollapsed } = useSnapshot(appStore)
  const { info, setToken } = useSnapshot(userStore)

  const [currentActive, setCurrentActive] = useState(1)
  const { useRouter } = useCustomRouter()
  const router = useRouter()
  const onClick = () => {
    setCollapsed(!collapsed)
  }

  const handleLogOut = () => {
    setToken('')
    router.push('/login')
  }
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1' onClick={onClick}>
        <a className='btn btn-ghost text-xl'>daisyUI</a>
      </div>
      <div className='flex-none gap-2'>
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
          >
            <div className='w-10 rounded-full'>
              {info.head ? (
                <img
                  alt='Tailwind CSS Navbar component'
                  src={filterImage(info.head)}
                />
              ) : (
                ''
              )}
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
            <li onClick={handleLogOut}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Header
