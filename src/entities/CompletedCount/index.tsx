import { useAppSelector } from '@shared/hooks'

export const CompletedCount = () => {
  const completedCount = useAppSelector(state => state.todos.completedCount)

  return (
    <span>
      Счетчик выполненных задач: <strong>{completedCount}</strong>
    </span>
  )
}
