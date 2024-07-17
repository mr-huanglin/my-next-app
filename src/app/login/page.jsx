/*
 * @Author: huanglin
 * @LastEditTime: 2024-07-17 14:49:16
 */
'use client'
import { useState, useEffect } from 'react'
import './index.scss'
import { Button } from 'antd'
import { useCustomRouter } from '@/hooks'

// 动态引入 static/image 文件夹下的所有图片
const importAll = (r) => r.keys().map(r)
const images = importAll(
  require.context('@/static/image', false, /\.(png|jpe?g|svg)$/)
)
export default function LoginPage() {
  const { useRouter } = useCustomRouter()
  const [currentImage, setCurrentImage] = useState(0)
  const router = useRouter()
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  const handleLogin = () => {
    router.push('/home')
  }
  return (
    <div
      className='main relative transition-all duration-1000'
      style={{ backgroundImage: `url(${images[currentImage].default.src})` }}
    >
      <div className='card  shadow-xl bg-background/80 dark:bg-default-100/50 max-w-[610px] absolute right-[200px] w-96'>
        <div className='card-body'>
          <h2 className='card-title'>Welcome To My Page</h2>
          <form className='login-form'>
            <div className='form-group'>
              <label htmlFor='username'>Username:</label>

              <input
                type='text'
                id='username'
                placeholder='请输入账号'
                autoComplete='username'
                className='input input-bordered w-full max-w-xs'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='password'>Password:</label>

              <input
                type='password'
                id='password'
                placeholder='请输入密码'
                autoComplete='current-password'
                className='input input-bordered w-full max-w-xs'
              />
            </div>

            <div className='flex justify-center'>
              <Button type='primary' onClick={handleLogin}>
                登录
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
