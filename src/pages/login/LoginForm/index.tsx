import React from 'react';
import { Form, Button } from 'antd';

import { signin } from 'next-auth/client';

import { GoogleOutlined } from '@ant-design/icons';

const FormItem = Form.Item;

function LoginForm() {
  return (
    <Form className="login-form">
      <FormItem />
      <FormItem className="center-text">
        <Button className="login-form-button" onClick={signin}>
          <GoogleOutlined />
          Entrar com Google
        </Button>
      </FormItem>
    </Form>
  );
}

export default LoginForm;
