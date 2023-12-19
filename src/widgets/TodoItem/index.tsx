import { Button } from '@shared/components'
import { useAppDispatch } from '@shared/hooks'
import { removeTodo, toggleComplete } from '@shared/store'
import { Todo } from '@shared/types'

export const TodoItem = ({ id, title, completed }: Readonly<Todo>) => {
  const dispatch = useAppDispatch()

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleComplete(id))}
      />
      <span>{title}</span>
      <Button onClick={() => dispatch(removeTodo(id))} text="&times;" />
    </li>
  )
}
