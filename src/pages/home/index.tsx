
import { useNavigate } from 'react-router-dom'
import { Button, Badge } from 'antd';

function Home() {
  const router = useNavigate()

  function toLogin() {
    router('/login')
  }

  return (
    <>
      <Badge count={5}>
        <h1>Home</h1>
      </Badge>

      <Button type="primary" onClick={toLogin}>toLogin</Button>
    </>
  )
}

export default Home
