import { createBrowserRouter } from 'react-router-dom'
import { TodoPage, NotFoundPage, PostsPage, RTKQueryPage } from '@pages'
import { Layout } from '../layout'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <TodoPage />
      },
      {
        path: '/async',
        element: <PostsPage />
      },
      {
        path: '/rtkquery',
        element: <RTKQueryPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
])
