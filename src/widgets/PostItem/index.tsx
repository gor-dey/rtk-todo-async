import { Button } from '@shared/components'
import { useAppDispatch } from '@shared/hooks'
import { removePost } from '@shared/store'
import { Post } from '@shared/types'

export const PostItem = (post: Post) => {
  const dispatch = useAppDispatch()

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>

      <Button onClick={() => dispatch(removePost(post.id))} text="удалить" />
    </div>
  )
}
