
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd';

function Login() {
  const router = useNavigate()

  function toHome() {
    router('/home')
  }

  return (
    <>
      <h1>Login</h1>
      <Button type="primary" onClick={toHome}>toHome</Button>
    </>
  )
}

export default Login
