import { createBrowserRouter } from 'react-router-dom'
import { TodoPage, NotFoundPage } from '@pages'
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
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
])
