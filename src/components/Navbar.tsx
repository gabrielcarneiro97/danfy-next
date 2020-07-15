import React from 'react';

import { useSession, signin, signout } from 'next-auth/client';

import { Row, Col } from 'antd';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';

export default function Navbar() {
  const session = useSession();
  const icon = session ? <LoginOutlined /> : <LogoutOutlined />;

  const handleClick = session ? signout : signin;

  return (
    <Row style={{ color: '#FFF' }}>
      <Col span={12}>
        <a href="/#" style={{ color: '#FFF' }}>
          <span style={{ fontWeight: 'bolder' }}>DANFY </span>
          {/* <span style={{ fontWeight: 'lighter' }}>{version}</span> */}
        </a>
      </Col>
      <Col span={12} style={{ textAlign: 'right' }}>
        <a
          href="/#"
          className="login-btn"
          onClick={handleClick}
          style={{
            color: '#FFF',
            fontWeight: 'bold',
          }}
        >
          {icon}
        </a>
      </Col>
    </Row>
  );
}
