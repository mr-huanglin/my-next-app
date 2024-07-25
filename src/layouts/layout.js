import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Layout, Menu, theme } from 'antd'
import { useSnapshot } from 'valtio'
import { appStore } from '@/store'
import { useCustomRouter } from '@/hooks'
import DefaultContent from './content'
import DefaultHeader from './header'
const { Header, Sider, Content } = Layout

const DefaultLayout = ({ children }) => {
  const {
    collapsed,
    routes,
    defaultSelectedKeys,
    setDefaultSelectedKeys,
    setCollapsed
  } = useSnapshot(appStore)

  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()
  const { useRouter } = useCustomRouter()
  const router = useRouter()
  const clickMenu = (e) => {
    router.push(e.key)
    setDefaultSelectedKeys(e.key)
  }

  return (
    <Layout className='w-[100vw] h-[100vh]'>
      <Sider trigger={null} collapsible collapsed={collapsed} theme='light'>
        <div className='demo-logo-vertical' />
        <Menu
          theme='light'
          mode='inline'
          selectedKeys={[defaultSelectedKeys]}
          items={routes}
          onClick={clickMenu}
        />
      </Sider>
      <Layout>
        <DefaultHeader />
        {/* <Header
          style={{
            padding: 0,
            background: colorBgContainer
          }}
        >
          <Button
            type='text'
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64
            }}
          />
        </Header> */}
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG
          }}
        >
          <DefaultContent>{children}</DefaultContent>
        </Content>
      </Layout>
    </Layout>
  )
}
export default DefaultLayout
