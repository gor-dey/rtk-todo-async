import { createBrowserRouter } from 'react-router-dom'
import { StartingPage, NotFoundPage } from '@pages'

export const router = createBrowserRouter([
  {
    path: '/',
    Component() {
      return <StartingPage />
    }
  },
  {
    path: '*',
    Component() {
      return <NotFoundPage />
    }
  }
])


