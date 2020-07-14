import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

export default function LoadingScreen() {
  return (
    <Row justify="center" align="middle" style={{ minHeight: '60vh' }}>
      <Col>
        <LoadingOutlined style={{ fontSize: 100 }} />
      </Col>
    </Row>
  );
}
