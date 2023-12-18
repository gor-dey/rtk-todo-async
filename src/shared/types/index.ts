export type ButtonProps = {
  text?: string
  onClick?: () => void
  link?: string
}

type Id = string

export type Todo = {
  id: Id
  title: string
  completed: boolean
}

export type FiltersType = 'all' | 'inProgress' | 'completed'

export type TodoState = {
  list: Todo[]
  filter: FiltersType
}
