import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from '@shared/components'
import { useAppDispatch } from '@shared/hooks'
import { addTodo } from '@shared/store'

interface FormData {
  text: string
}

export const TodoForm = () => {
  const { register, handleSubmit, reset } = useForm<FormData>()
  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    if (data.text.trim().length) {
      dispatch(addTodo(data.text))
      reset()
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="новая туду"
        {...register('text', { required: true })}
      />
      <Button text="Добавить туду" />
    </form>
  )
}
