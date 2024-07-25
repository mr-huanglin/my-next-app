'use client'
import ComImage from '@/components/com-image'
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
    <div>{url && <ComImage src={url} width={300} height={500} priority />}</div>
  )
}
