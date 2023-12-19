import { CompletedCount } from '@entities'
import { Button } from '@shared/components'
import { gap } from '@shared/cssConstants'
import { useAppSelector } from '@shared/hooks'
import { useSendCompletedTasksMutation } from '@shared/store'
import { selectCompletedTodosAsJson } from '@shared/store/selector'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  gap: ${gap};
  align-items: center;
`

export const Completed = () => {
  const completedTodosJson: string = useAppSelector(selectCompletedTodosAsJson)
  console.log('completedTodosJson', completedTodosJson)
  const [sendCompletedTasks] = useSendCompletedTasksMutation()

  const handleSendCompletedTasks = async () => {
    console.log('hello', completedTodosJson)
    if (completedTodosJson.length > 0) {
      try {
        await sendCompletedTasks(completedTodosJson)
      } catch (error) {
        console.error('Error sending completed tasks:', error)
      }
    } else {
      console.warn('No completed tasks to send.')
    }
  }

  return (
    <Div>
      <CompletedCount />
      <Button onClick={handleSendCompletedTasks} text="Отправить" />
    </Div>
  )
}
