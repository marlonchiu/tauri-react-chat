import Chat from '@/pages/chat'
import More from '@/pages/more'
import Layout from './Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Chat /> },
      { path: '/more', element: <More /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
