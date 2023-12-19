import { createSelector } from 'reselect'
import { Todo, TodoState } from '@shared/types'

const selectAllTodos = (state: { todos: TodoState }) => state.todos.list

const selectCompletedTodosAsJson = createSelector(
  [selectAllTodos],
  (allTodos: Todo[]) => {
    const completedTodos = allTodos.filter(todo => todo.completed)
    return JSON.stringify(completedTodos)
  }
)

export { selectCompletedTodosAsJson }
