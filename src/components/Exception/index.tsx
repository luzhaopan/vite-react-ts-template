import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Result } from 'antd';

interface IException {
  title?: string;
  description?: React.ReactNode;
}


const Exception: React.FC<IException> = ({ title = '404', description }) => {
  const navigate = useNavigate();
  return (
    <Result
      status='404'
      title={title}
      subTitle={description}
      extra={<Button type="primary" onClick={() => navigate('/')}>Back Home</Button>}
    />
  )
};

export default Exception;
