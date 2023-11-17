import React from 'react';
import { useNavigate } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}


const MenuBar: React.FC = () => {

  const navigate = useNavigate()

  const items: MenuItem[] = [
    // getItem('Option 1', '1', <UserOutlined />),
    getItem('Home', '/home', <UserOutlined />),
    getItem('Demo', 'sub1', <UserOutlined />, [
      getItem('List', '/list'),
      getItem('Table', '/table'),
      getItem('Project', '/project')
    ]),
  ];


  const onClick: MenuProps['onClick'] = (e) => {
    // console.log('click ', e);
    navigate(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      theme="dark"
      mode="inline"
      defaultOpenKeys={['sub1']}
      defaultSelectedKeys={['/home']}
      items={items}
    />
  );
};

export default MenuBar;