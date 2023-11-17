import React from 'react';
import { Flex, Image } from 'antd';

const boxStyle: React.CSSProperties = {
  width: '100%',
  height: 60,
  color: '#fff'
};

const Logo: React.FC<{ collapsed: boolean }> = ({ collapsed }) => {

  return (
    <Flex style={boxStyle} justify='center' align='center'>
      <Image preview={false} width={30} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
      <div style={{ display: collapsed ? 'none' : '' }}>vite-react-template</div>
    </Flex>
  );
};

export default Logo;