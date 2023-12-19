import { Button } from '@shared/components'
import { gap } from '@shared/cssConstants'
import { useAppDispatch } from '@shared/hooks'
import { setFilter } from '@shared/store'
import { all, completed, inProgress } from '@shared/utils'
import styled from 'styled-components'

const Div = styled.div`
  display: inline-flex;
  gap: ${gap};
`

export const Filters = () => {
  const dispatch = useAppDispatch()

  return (
    <Div>
      <Button text="Все" onClick={() => dispatch(setFilter(all))} />
      <Button text="В работе" onClick={() => dispatch(setFilter(inProgress))} />
      <Button
        text="Выполненные"
        onClick={() => dispatch(setFilter(completed))}
      />
    </Div>
  )
}
