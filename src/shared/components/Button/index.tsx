import { ButtonProps } from '@shared/types'
import { Link } from 'react-router-dom'

export const Button = (props: ButtonProps) => {
  if (props.link)
    return (
      <Link to={props.link}>
        <button onClick={props.onClick}>{props.text}</button>
      </Link>
    )
  else {
    return <button onClick={props.onClick}>{props.text}</button>
  }
}
