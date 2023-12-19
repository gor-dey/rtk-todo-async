import { createBrowserRouter } from 'react-router-dom'
import { TodoPage, NotFoundPage, PostsPage } from '@pages'
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
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
])
