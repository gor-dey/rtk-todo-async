import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: builder => ({
    sendCompletedTasks: builder.mutation({
      query: completedTasks => ({
        url: '/send-completed-tasks',
        method: 'POST',
        body: completedTasks
      })
    })
  })
})

export const { useSendCompletedTasksMutation } = todosApi
