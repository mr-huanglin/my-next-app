/*
 * @Date: 2024-07-25 14:06:00
 * @LastEditTime: 2024-07-26 12:05:24
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
    label: '工作台'
  },
  {
    key: '/workOrder',
    icon: <VideoCameraOutlined />,
    label: '工单管理',
    children: [
      { key: '/caseManagement', label: '案件管理' },
      { key: '/documentWorkOrderManagement', label: '文书工单管理' }
    ]
  },
  {
    key: '/chat',
    icon: <UploadOutlined />,
    label: '聊天信息'
  }
]
export default routes
