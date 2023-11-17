import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { Layout, Button, theme, Flex } from 'antd';
import Logo from './components/Logo'
import MenuBar from './components/MenuBar'
import NavBar from './components/NavBar'
import BreadcrumbBar from './components/Breadcrumb'

// import { ReactComponent as LogoSvg } from "@/assets/react.svg";

const { Header, Sider, Content, Footer } = Layout;


const LayoutPage: React.FC = () => {

  const navigate = useNavigate()
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, [navigate, location]);

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        collapsedWidth="50"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <Logo collapsed={collapsed} />
        <MenuBar />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Flex justify='space-between' align="center">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <NavBar />
          </Flex>

        </Header>
        <BreadcrumbBar />
        <Content
          style={{
            margin: '15px 15px 0',
            padding: 25,
            background: colorBgContainer,
          }}
        >

          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>vite + react ©2023 Created by lzp</Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;