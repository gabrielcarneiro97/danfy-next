import React from 'react';

import {
  Row,
  Col,
  Upload,
  Button,
  message,
} from 'antd';
import { SelectOutlined } from '@ant-design/icons';

import usePrivate from 'src/hooks/usePrivate';

import AppLayout from 'src/components/AppLayout';

export default function Importar() {
  const { isLoading } = usePrivate();

  const uploadChange = (info) => {
    const data = info.file.response;

    if (!data) return;

    if (info.file.status === 'done') {
      console.log(data[0].notaServico.chave);
    } else if (info.file.status === 'error') {
      message.error(`Arquivo: ${info.file.name} invalido!`);
    }
  };

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
            onChange={uploadChange}
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
