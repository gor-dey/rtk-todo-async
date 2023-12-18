import { RouterProvider } from 'react-router'
import { RootStoreProvider } from '@shared'
import { rootStore } from '@shared'
import { router } from './router'

export const App = () => {
  return (
    <RootStoreProvider rootStore={rootStore}>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </RootStoreProvider>
  )
}

         
