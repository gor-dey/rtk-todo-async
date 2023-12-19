import { background } from '@shared/cssConstants'
import { ButtonProps } from '@shared/types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ButtonStyle = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: ${background};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
    transition: 0.2s;
    box-shadow: 0px 0px 5px #e0e0e0;
    transform: scale(1.05);
    z-index: 1;
  }
`

export const Button = (props: ButtonProps) => {
  if (props.link)
    return (
      <Link to={props.link}>
        <ButtonStyle onClick={props.onClick}>{props.text}</ButtonStyle>
      </Link>
    )
  else {
    return <ButtonStyle onClick={props.onClick}>{props.text}</ButtonStyle>
  }
}
