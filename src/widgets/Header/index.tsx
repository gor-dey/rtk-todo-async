import { Button } from '@shared/components'
import { border, gap } from '@shared/cssConstants'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  gap: ${gap};
  padding: ${gap};
  border-bottom: ${border};
`

export const Header = () => {
  const navigate = useNavigate()

  return (
    <>
      <HeaderStyle>
        <Button onClick={() => navigate('/')} text="Todo" />
        <Button onClick={() => navigate('/async')} text="Async Thunk" />
        <Button onClick={() => navigate('/rtkquery')} text="RTK Query" />
      </HeaderStyle>
    </>
  )
}
