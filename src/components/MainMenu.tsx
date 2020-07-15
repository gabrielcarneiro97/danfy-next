import React from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router';

import { Menu } from 'antd';
import {
  TeamOutlined,
  DownloadOutlined,
  FolderOpenOutlined,
  InboxOutlined,
} from '@ant-design/icons';

const MenuItem = Menu.Item;

export default function MainMenu() {
  const router = useRouter();

  const { pathname } = router;

  return (
    <>
      <Menu
        mode="inline"
        selectedKeys={[pathname]}
        style={{ height: '92%', borderRight: 0, backgroundColor: 'white' }}
      >
        <MenuItem key="/importar">
          <Link href="/importar">
            <>
              <DownloadOutlined />
              Importar Notas
            </>
          </Link>
        </MenuItem>
        <MenuItem key="/clientes">
          <Link href="/clientes">
            <>
              <TeamOutlined />
              Gerenciar Clientes
            </>
          </Link>
        </MenuItem>
        <MenuItem key="/visualizar">
          <Link href="/visualizar">
            <>
              <FolderOpenOutlined />
              Visualizar Movimento
            </>
          </Link>
        </MenuItem>
        <MenuItem key="/estoque">
          <Link href="/estoque">
            <>
              <InboxOutlined />
              Estoque
            </>
          </Link>
        </MenuItem>
      </Menu>
      {/* <div style={{
        height: '8%',
        borderRight: 0,
        fontSize: '9px',
        backgroundColor: 'white',
        paddingLeft: '3%',
      }}
      >
        API:&nbsp;
        {apiVer}
        <br />
        Database:&nbsp;
        {dbVer.split('(')[0]}
        <br />
        Node.js:&nbsp;
        {nodeVer}
      </div> */}
    </>
  );
}
