/*
 * @Date: 2024-07-25 14:06:00
 * @LastEditTime: 2024-07-25 14:08:11
 */
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
const routes = [
  {
    key: '/home',
    icon: <UserOutlined />,
    label: 'nav 1'
  },
  {
    key: '/home2',
    icon: <VideoCameraOutlined />,
    label: 'nav 2'
  },
  {
    key: '/3',
    icon: <UploadOutlined />,
    label: 'nav 3'
  }
]
export default routes
