/*
 * @Author: huanglin
 * @LastEditTime: 2024-07-26 09:58:45
 */
'use client'
import { useState, useEffect } from 'react'
import './index.scss'
import { Button } from 'antd'
import { useCustomRouter, useHttp } from '@/hooks'
import { userStore } from '@/store'
import { useSnapshot } from 'valtio'
// import {u}

// 动态引入 static/image 文件夹下的所有图片
const importAll = (r) => r.keys().map(r)
const images = importAll(
  require.context('@/static/image', false, /\.(png|jpe?g|svg)$/)
)
export default function LoginPage() {
  const { useRouter } = useCustomRouter()
  const [currentImage, setCurrentImage] = useState(0)
  const [loginName, setLoginName] = useState('')
  const [loginPwd, setLoginPwd] = useState('')
  const { setToken } = useSnapshot(userStore)
  const router = useRouter()
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  const handleLogin = async () => {
    const params = {
      loginName,
      loginPwd
    }
    console.log('TCL: handleLogin -> params', params)

    const {
      result: { token }
    } = await useHttp('/restApi/member/auth/login', params)
    setToken(token)
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
                value={loginName}
                onChange={(e) => setLoginName(e.target.value)}
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
                value={loginPwd}
                onChange={(e) => setLoginPwd(e.target.value)}
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
