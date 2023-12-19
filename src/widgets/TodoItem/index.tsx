import { Button } from '@shared/components'
import { background, border, gap } from '@shared/cssConstants'
import { useAppDispatch } from '@shared/hooks'
import { removeTodo, toggleComplete } from '@shared/store'
import { Todo } from '@shared/types'
import styled from 'styled-components'

const Li = styled.li<{ completed?: boolean }>`
  list-style: none;
  padding: ${gap};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 600px;
  border-bottom: ${border};

  & > span {
    flex: 1;
    text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  }

  & > input {
    cursor: pointer;
    margin-right: ${gap};
    width: ${gap};
    height: ${gap};
    accent-color: ${background};
  }

  @media (max-width: 600px) {
    width: 100vw;
  }
`

export const TodoItem = ({ id, title, completed }: Readonly<Todo>) => {
  const dispatch = useAppDispatch()

  return (
    <Li completed={completed}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleComplete(id))}
      />
      <span>{title}</span>
      <Button onClick={() => dispatch(removeTodo(id))} text="удалить" />
    </Li>
  )
}
