import { Filters, TodoForm } from '@entities'
import { gap } from '@shared/cssConstants'
import { Completed, TodoList } from '@widgets'
import styled from 'styled-components'

const Div = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${gap};

  & :last-child {
    align-self: flex-start;
  }
`

export const TodoPage = () => {
  return (
    <Div>
      <h1>Todo-лист на RTK</h1>
      <Completed />
      <TodoForm />
      <Filters />
      <TodoList />
    </Div>
  )
}
