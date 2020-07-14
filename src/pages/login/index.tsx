import React from 'react';
import { Row, Col, Layout } from 'antd';

import usePublic from 'src/hooks/usePublic';

import LoginForm from './LoginForm';

const { Content } = Layout;

export default function Login() {
  const { loading } = usePublic();

  return (
    <>
      {
      !loading
      && (
      <Content style={{ minHeight: '92vh' }}>
        <Row justify="center" align="middle">
          <Col lg={6} md={8} sm={12}>
            <LoginForm />
          </Col>
        </Row>
      </Content>
      )
    }
    </>
  );
}
