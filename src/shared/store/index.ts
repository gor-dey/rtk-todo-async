import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slices/todoSlice'
import asyncSlice from './slices/asyncSlice'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    post: asyncSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export * from './slices/todoSlice'
export * from './slices/asyncSlice'
