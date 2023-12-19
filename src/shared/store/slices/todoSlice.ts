import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FiltersType, Id, TodoState } from '@shared/types'
import { all } from '@shared/utils'

const initialState: TodoState = {
  list: [],
  filter: all,
  completedCount: 0
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.list.push({
        id: new Date().toISOString(),
        title: action.payload,
        completed: false
      })
    },
    toggleComplete(state, action: PayloadAction<Id>) {
      const toggledTodo = state.list.find(todo => todo.id === action.payload)
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed
        state.completedCount = state.list.filter(todo => todo.completed).length
      }
    },
    removeTodo(state, action: PayloadAction<Id>) {
      state.list = state.list.filter(todo => todo.id !== action.payload)
      state.completedCount = state.list.filter(todo => todo.completed).length
    },
    setFilter(state, action: PayloadAction<FiltersType>) {
      state.filter = action.payload
    }
  }
})

export const { addTodo, toggleComplete, removeTodo, setFilter } =
  todoSlice.actions

export const selectCompletedTodos = (state: { todos: TodoState }) =>
  state.todos.list.filter(todo => todo.completed)

export default todoSlice.reducer
