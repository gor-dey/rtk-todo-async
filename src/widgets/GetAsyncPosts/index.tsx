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

  const posts = useAppSelector(state => state.post.posts)

  return (
    <ul>
      {posts?.map((post: Post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </ul>
  )
}
