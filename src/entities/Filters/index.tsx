import { Button } from '@shared/components'
import { useAppDispatch } from '@shared/hooks'
import { setFilter } from '@shared/store'
import { all, completed, inProgress } from '@shared/utils'

export const Filters = () => {
  const dispatch = useAppDispatch()

  return (
    <div>
      <Button text="Все" onClick={() => dispatch(setFilter(all))} />
      <Button text="В работе" onClick={() => dispatch(setFilter(inProgress))} />
      <Button
        text="Выполненные"
        onClick={() => dispatch(setFilter(completed))}
      />
    </div>
  )
}
