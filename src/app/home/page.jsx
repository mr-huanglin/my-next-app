/*
 * @Date: 2024-07-23 11:59:13
 * @LastEditTime: 2024-07-31 11:54:38
 */
'use client'
import ComImage from '@/components/com-image'
import { Card } from 'antd'
import { useEffect, useState } from 'react'
export default function Home() {
  const [url, setUrl] = useState('')

  const getUrl = async () => {
    try {
      const res = await fetch('https://api.thecatapi.com/v1/images/search', {
        cache: 'no-store'
      })
      const [{ url }] = await res.json()
      setUrl(url)
    } catch (error) {
      setUrl(
        'https://img2.baidu.com/it/u=1008561530,2313586183&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1730'
      )
    }
  }

  useEffect(() => {
    getUrl()
  }, [])

  return (
    <div className='h-[100%]'>
      <Card>
        {url && <ComImage src={url} width={300} height={500} priority />}
      </Card>
    </div>
  )
}
