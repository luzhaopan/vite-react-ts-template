
import { useNavigate } from 'react-router-dom'
import { Button, Badge, Space, Tag } from 'antd';

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
      <Space size={[0, 8]} wrap>
        <Tag color="#f50">#f50</Tag>
        <Tag color="#2db7f5">#2db7f5</Tag>
        <Tag color="#87d068">#87d068</Tag>
        <Tag color="#108ee9">#108ee9</Tag>
      </Space>
      <Button type="primary" onClick={toLogin}>toLogin</Button>
    </>
  )
}

export default Home
