import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from '@shared/components'
import { useAppDispatch } from '@shared/hooks'
import { addTodo } from '@shared/store'
import styled from 'styled-components'
import { background, border, gap } from '@shared/cssConstants'

const Form = styled.form`
  display: flex;
  gap: ${gap};
`

const Input = styled.input`
  outline: none;
  border: none;
  border-bottom: ${border};
  background: ${background};
  padding: 0 ${gap};
  max-width: 30ch; /* Limit the width to the equivalent of 30 characters */
`

interface FormData {
  text: string
}

export const TodoForm = () => {
  const { register, handleSubmit, reset, setError, formState } =
    useForm<FormData>()
  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    if (data.text.trim().length <= 30) {
      dispatch(addTodo(data.text))
      reset()
    } else {
      setError('text', {})
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        autoFocus
        placeholder="новая туду"
        {...register('text', { required: true, maxLength: 30 })}
      />
      <Button
        text={
          formState.errors.text
            ? 'Вы не можете ввести более 30 символов!'
            : 'Добавить туду'
        }
      />
    </Form>
  )
}
