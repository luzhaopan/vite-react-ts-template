import React from "react";
import { useNavigate } from "react-router-dom";
import {
  DownOutlined
} from "@ant-design/icons";
import { Avatar, Dropdown } from "antd";
import type { MenuProps } from 'antd';

const AvatarDropdown: React.FC = () => {

  const navigate = useNavigate();
  // const location = useLocation();

  /**
   * 退出登录，并且将当前的 url 保存
   */
  const loginOut = async () => {
    // Note: There may be security issues, please note
    if (location.pathname !== "/login") {
      navigate("/login", {
        replace: true,
      });
    }
  };


  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div rel="noopener noreferrer" onClick={loginOut}>
          logout
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/luzhaopan/vite-react-ts-template">
          github
        </a>
      )
    }
  ];


  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Avatar
          size="small"
          className={''}
          src='https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
          alt="avatar"
        />
        <DownOutlined />
      </a>
    </Dropdown>
  );
};

export default AvatarDropdown;
