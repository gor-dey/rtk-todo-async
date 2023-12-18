import { Button } from '@shared/components'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()

  return (
    <header>
      <Button onClick={() => navigate('/')} text="Todo" />
      <Button onClick={() => navigate('/async')} text="Async Thunk" />
      <Button onClick={() => navigate('/rtkquery')} text="RTK Query" />
    </header>
  )
}
