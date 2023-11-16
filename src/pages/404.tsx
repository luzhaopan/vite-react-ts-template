import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Result } from 'antd';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={() => navigate('/')}>Back Home</Button>}
    />
  )
};


// const NotFoundPage: React.FC = () => {

//   const navigate = useNavigate();
//   return (
//     <Result
//       status="404"
//       title="404"
//       subTitle="对不起，您访问的页面不存在。"
//       extra={
//         <Button type="primary" onClick={() => navigate('/')}>
//           返回首页
//         </Button>
//       }
//     />
//   );
// };

export default NotFoundPage;
