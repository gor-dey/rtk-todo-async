import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slices/todoSlice'
import asyncSlice from './slices/asyncSlice'
import { postsApi } from './rtkQuery'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    post: asyncSlice,
    [postsApi.reducerPath]: postsApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(postsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export * from './slices/todoSlice'
export * from './slices/asyncSlice'
export * from './rtkQuery'
