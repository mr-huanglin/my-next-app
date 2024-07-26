/*
 * @Date: 2024-07-23 11:59:13
 * @LastEditTime: 2024-07-26 15:16:41
 */
import { Flex, Spin } from 'antd'
export default function BaseLoading() {
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center'>
      <Spin size='large' />
    </div>
  )
}
