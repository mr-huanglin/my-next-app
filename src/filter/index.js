/*
 * @Date: 2024-07-26 10:35:40
 * @LastEditTime: 2024-07-30 15:53:45
 */

import { toThousands } from '@/utils'
export const filterImage = (url) => {
  const isHttpUrl = url && url.indexOf('https') === -1
  if (!isHttpUrl) {
    return url
  }

  return `${process.env.NEXT_PUBLIC_OSS_URL}${url}`
}

export const filterPrice = (price) => {
  if (!price) return
  const newPrice = price / 100
  return toThousands(newPrice)
}
