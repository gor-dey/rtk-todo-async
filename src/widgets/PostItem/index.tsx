import { Button } from '@shared/components'
import { border } from '@shared/cssConstants'
import { useAppDispatch } from '@shared/hooks'
import { removePost } from '@shared/store'
import { Id, Post } from '@shared/types'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

interface PostItemProps extends Omit<Post, 'handleRemovePost'> {
  handleRemovePost?: (id: Id) => void
}

const Li = styled.li`
  list-style: none;
  margin-left: 0;
  padding-left: 0;
  border-bottom: ${border};
`

export const PostItem = (post: PostItemProps) => {
  const pathname = useLocation().pathname

  const dispatch = useAppDispatch()

  return (
    <Li>
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
    </Li>
  )
}
