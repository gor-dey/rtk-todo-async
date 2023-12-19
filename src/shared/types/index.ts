export type ButtonProps = {
  text?: string
  onClick?: () => void
  link?: string
}

export type Id = string | number

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

export type Post = {
  id: Id
  title: string
  body: string
}

export type PostState = {
  posts: Post[]
  loading: boolean
  error: null | string | undefined
}
