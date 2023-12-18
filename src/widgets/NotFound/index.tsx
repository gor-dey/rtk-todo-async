import { Button } from '@shared/components'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <>
      <h1>Страница не найдена!</h1>
      <br />
      <Link to="/">
        <Button text="На главную" />
      </Link>
    </>
  )
}
