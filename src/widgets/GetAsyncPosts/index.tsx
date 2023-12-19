import { Loader } from '@shared/components'
import { useAppDispatch, useAppSelector } from '@shared/hooks'
import { getPosts } from '@shared/store'
import { Post } from '@shared/types'
import { PostItem } from '@widgets'
import { useEffect } from 'react'

export const GetAsyncPosts = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  const { posts, loading } = useAppSelector(state => state.post)

  if (loading) return <Loader />

  return (
    <ul>
      {posts?.map((post: Post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </ul>
  )
}
