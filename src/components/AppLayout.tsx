import React from 'react';
import { Layout } from 'antd';

import MainMenu from './MainMenu';
import Navbar from './Navbar';

const { Content, Sider, Header } = Layout;

type Props = {
  children? : JSX.Element | JSX.Element[] | string | number,
}

export default function AppLayout(props: Props) {
  const { children } = props;

  return (
    <Layout>
      <Header>
        <Navbar />
      </Header>
      <Layout>
        <Sider width={230}>
          <MainMenu />
        </Sider>
        <Content
          style={{
            background: '#ff100',
            padding: 24,
            margin: 0,
            minHeight: window.innerHeight - 64,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
