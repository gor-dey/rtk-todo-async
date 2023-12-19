import { useState, useEffect } from 'react'

import { PostItem } from '@widgets'
import { Id, Post } from '@shared/types'
import { removePost, useGetPostsQuery } from '@shared/store'
import { Loader } from '@shared/components'

export const RTKQueryWidget = () => {
  const { data: posts = [], isLoading } = useGetPostsQuery('')
  const [localPosts, setLocalPosts] = useState(posts)

  const handleRemovePost = async (postId: Id) => {
    try {
      await removePost(postId)

      setLocalPosts(localPosts.filter((post: Post) => post.id !== postId))
    } catch (error) {
      console.error('Error removing post:', error)
    }
  }

  useEffect(() => {
    setLocalPosts(posts)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(posts)])

  if (isLoading) return <Loader />

  return (
    <ul>
      {localPosts.map((post: Post) => (
        <PostItem key={post.id} handleRemovePost={handleRemovePost} {...post} />
      ))}
    </ul>
  )
}
