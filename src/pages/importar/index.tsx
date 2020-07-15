import React from 'react';

import {
  Row,
  Col,
  Upload,
  Button,
} from 'antd';
import { SelectOutlined } from '@ant-design/icons';

import usePrivate from 'src/hooks/usePrivate';

import AppLayout from 'src/components/AppLayout';

export default function Importar() {
  const { isLoading } = usePrivate();

  return isLoading(
    <AppLayout>
      <Row
        justify="center"
        align="top"
      >
        <Col span={12} style={{ textAlign: 'center' }}>
          <Upload
            name="file"
            action="/api/file"
            accept=".xml"
            multiple
            // onChange={uploadChange}
            // defaultFileList={fileList}
          >
            <Button icon={<SelectOutlined />}>
              Selecionar Arquivos
            </Button>
          </Upload>
        </Col>
      </Row>
    </AppLayout>,
  );
}
