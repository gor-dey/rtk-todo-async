import { CompletedCount, Filters, TodoForm } from '@entities'
import { gap } from '@shared/cssConstants'
import { TodoList } from '@widgets'
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
      <CompletedCount />
      <TodoForm />
      <Filters />
      <TodoList />
    </Div>
  )
}
