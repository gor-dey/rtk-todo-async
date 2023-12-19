import { RouterProvider } from 'react-router'

import { router } from './router'
import { Provider } from 'react-redux'
import { store } from '@shared/store'
import { Loader } from '@shared/components'

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </Provider>
  )
}
