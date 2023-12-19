import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FiltersType, Id, TodoState } from '@shared/types'
import { all } from '@shared/utils'

const initialState: TodoState = {
  list: [],
  filter: all
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
      toggledTodo && (toggledTodo.completed = !toggledTodo.completed)
    },
    removeTodo(state, action: PayloadAction<Id>) {
      state.list = state.list.filter(todo => todo.id !== action.payload)
    },
    setFilter(state, action: PayloadAction<FiltersType>) {
      state.filter = action.payload
    }
  }
})

export const { addTodo, toggleComplete, removeTodo, setFilter } =
  todoSlice.actions

export default todoSlice.reducer
