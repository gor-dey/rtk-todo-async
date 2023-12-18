import { useAppSelector } from '@shared/hooks'
import { Todo, TodoState } from '@shared/types'
import { all, completed, inProgress } from '@shared/utils'
import { TodoItem } from '@widgets'

export const TodoList = () => {
  const todos: Todo[] = useAppSelector(
    (state: { todos: TodoState }) => state.todos.list
  )

  const filter = useAppSelector(
    (state: { todos: TodoState }) => state.todos.filter
  )

  const filteredTodos = todos.filter((todo: Todo) => {
    switch (filter) {
      case all:
        return true
      case inProgress:
        return !todo.completed
      case completed:
        return todo.completed
      default:
        return true
    }
  })

  return (
    <ul>
      {filteredTodos.map((todo: Todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  )
}
