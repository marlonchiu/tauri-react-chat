import Chat from '@/pages/chat'
import More from '@/pages/more'
import Layout from './Layout'
import { StyleProvider } from '@ant-design/cssinjs'
import { useMount } from 'ahooks'
import { ConfigProvider } from 'antd'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Chat /> },
      { path: '/more', element: <More /> },
    ],
  },
])

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#3d3df5',
          colorPrimaryHover: '#3d3df5',
          wireframe: false,
          // borderRadius: 8,
          // borderRadiusSM: 6,
          // borderRadiusXS: 4,
        },
        components: {
          Input: {
            colorBorder: 'transparent',
          },
          InputNumber: {
            colorBorder: 'transparent',
          },
          Select: {
            colorBorder: 'transparent',
          },
        },
      }}
    >
      <StyleProvider hashPriority="high">
        <RouterProvider router={router} />
      </StyleProvider>
    </ConfigProvider>
  )
}

export default App
