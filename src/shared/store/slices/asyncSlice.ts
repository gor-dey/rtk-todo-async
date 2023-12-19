import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Id, Post, PostState } from '@shared/types'
import { baseUrl } from '@shared/utils'

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null
}

export const getPosts = createAsyncThunk<Post[], void, { rejectValue: string }>(
  'posts/getPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(baseUrl)
      const data: Post[] = await response.json()
      return data
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to get post')
    }
  }
)

export const removePost = createAsyncThunk<Id, Id, { rejectValue: string }>(
  'posts/removePost',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to remove post')
      }

      return id
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to remove post')
    }
  }
)

const asyncSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPosts.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload
        state.loading = false
      })
      .addCase(removePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter(post => post.id !== action.payload)
      })
  }
})

export default asyncSlice.reducer
