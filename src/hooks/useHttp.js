/*
 * @Date: 2024-07-25 14:22:47
 * @LastEditTime: 2024-07-30 18:04:27
 */
import { addRequestToQueue } from '@/utils/requestQueue' // 确保路径正确

const baseRequest = process.env.NEXT_PUBLIC_REQUEST_URL

export const useHttp = async (url, data, option = {}) => {
  return addRequestToQueue(async () => {
    try {
      const requestOptions = {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('token')
            ? `Bearer ${localStorage.getItem('token')}`
            : ''
        },
        ...option
      }

      const res = await fetch(`${baseRequest}${url}`, {
        body: JSON.stringify(data),
        ...requestOptions
      })

      if (!res.ok) {
        const errorData = await res.json() // 解析响应错误数据
        console.log('HTTP error data:', errorData)
        throw new Error(
          `HTTP error666! status: ${res.status}, message: ${errorData.message}`
        )
      }

      return res.json()
    } catch (error) {
      console.log('TCL: useHttp -> error', error)
      throw new Error(error.message)
    }
  }, 3) // 这里设置最多重试次数为3次
}
