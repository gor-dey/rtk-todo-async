import { RouterProvider } from 'react-router'

import { router } from './router'
import { Provider } from 'react-redux'
import { store } from '@shared/store'

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </Provider>
  )
}
