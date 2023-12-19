import { Button } from '@shared/components'
import { useAppDispatch } from '@shared/hooks'
import { removePost } from '@shared/store'
import { Id, Post } from '@shared/types'
import { useLocation } from 'react-router-dom'

interface PostItemProps extends Omit<Post, 'handleRemovePost'> {
  handleRemovePost?: (id: Id) => void
}

export const PostItem = (post: PostItemProps) => {
  const pathname = useLocation().pathname

  const dispatch = useAppDispatch()

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>

      {pathname === '/async' && (
        <Button onClick={() => dispatch(removePost(post.id))} text="удалить" />
      )}
      {pathname === '/rtkquery' && (
        <Button
          onClick={() => post.handleRemovePost?.(post.id)}
          text="удалить"
        />
      )}
    </div>
  )
}
