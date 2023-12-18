import { Filters, TodoForm } from '@entities'
import { TodoList } from '@widgets'

export const TodoPage = () => {
  return (
    <div>
      <h1>Todo-лист на RTK</h1>
      <TodoForm />
      <Filters />
      <TodoList />
    </div>
  )
}
