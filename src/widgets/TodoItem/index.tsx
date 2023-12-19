import { Button } from '@shared/components'
import { background, border, gap } from '@shared/cssConstants'
import { useAppDispatch } from '@shared/hooks'
import { removeTodo, toggleComplete } from '@shared/store'
import { Todo } from '@shared/types'
import styled from 'styled-components'

const Li = styled.li`
  list-style: none;
  padding: ${gap};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 600px;
  border-bottom: ${border};

  & > label {
    flex: 1;
    cursor: pointer;
  }

  & > input {
    cursor: pointer;
    margin-right: ${gap};
    width: ${gap};
    height: ${gap};
    accent-color: ${background};

    &:hover {
      transform: scale(1.2);
      transition: 0.2s;
    }
  }
  @media (max-width: 600px) {
    width: 100vw;
  }
`

export const TodoItem = ({ id, title, completed }: Readonly<Todo>) => {
  const dispatch = useAppDispatch()

  return (
    <Li>
      <input
        id={id.toString()}
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleComplete(id))}
      />
      <label htmlFor={id.toString()}>
        <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
          {title}
        </span>
      </label>
      <Button onClick={() => dispatch(removeTodo(id))} text="Удалить" />
    </Li>
  )
}
