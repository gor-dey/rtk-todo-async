import { ButtonProps } from '@shared'

export const Button = ({ text }: ButtonProps) => {
  return <button>{text && text}</button>
}


