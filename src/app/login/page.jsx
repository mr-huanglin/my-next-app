/*
 * @Author: huanglin
 * @LastEditTime: 2024-07-12 17:10:48
 */
'use client'
import { useState, useEffect } from 'react'
import './index.scss'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { Card, CardFooter, Image } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

// 动态引入 static/image 文件夹下的所有图片
const importAll = (r) => r.keys().map(r)
const images = importAll(
  require.context('@/static/image', false, /\.(png|jpe?g|svg)$/)
)
export default function LoginPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const router = useRouter()
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  const handleLogin = () => {
    console.log('login')
    router.push('/home')
  }
  return (
    <div
      className='main relative transition-all duration-1000'
      style={{ backgroundImage: `url(${images[currentImage].default.src})` }}
    >
      <Card
        className='px-[20px] py-[20px] border-none bg-background/70 dark:bg-default-100/50 max-w-[610px] absolute right-[200px] w-[300px]'
        shadow='sm'
      >
        <h2>Welcome To My Page</h2>
        <form className='login-form'>
          <div className='form-group'>
            <label htmlFor='username'>Username:</label>
            <Input
              type='text'
              id='username'
              name='username'
              autoComplete='username'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <Input
              type='password'
              id='password'
              name='password'
              required
              autoComplete='current-password'
            />
          </div>

          <div className='flex justify-center'>
            <Button color='primary' onClick={handleLogin}>
              登录
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
