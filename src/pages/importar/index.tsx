import React, { useState, useEffect } from 'react';

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

  const [fileList, setFileList] = useState([]);
  const [counter, setCounter] = useState(0);

  const [result, setResult] = useState([]);

  const addCounter = () => setCounter(counter + 1);
  const subCounter = () => setCounter(counter - 1);

  const addRes = (res) => setResult([...result, res]);
  const rmRes = (res) => setResult(res.filter((el) => el.chave !== res.chave));

  useEffect(() => {
    if (fileList.length > 0 && fileList.length === counter) {
      message.success('Arquivos Processados com Sucesso!');
      console.log(result);
    }
  }, [counter, fileList]);

  const uploadChange = (info) => {
    const data = info.file.response;

    if (fileList.length === 0 && info.fileList.length > 0) {
      setFileList(info.fileList);
    }

    if (!data) return;

    if (info.file.status === 'done') {
      console.log(data);
      // data.forEach(addRes);
      addCounter();
    } else if (info.file.status === 'error') {
      message.error(`Arquivo: ${info.file.name} invalido!`);
      addCounter();
    } else if (info.file.status === 'removed') {
      data.forEach(rmRes);
      subCounter();
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
            defaultFileList={fileList}
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
