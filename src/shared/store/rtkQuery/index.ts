import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Id } from '@shared/types'
import { baseUrl } from '@shared/utils'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => '/'
    }),
    removePost: builder.mutation({
      query: (id: Id) => ({
        url: `/${id}`,
        method: 'DELETE'
      })
    })
  })
})

export const { useGetPostsQuery } = postsApi
