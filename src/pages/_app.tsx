import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';

import moment from 'moment';

import 'antd/dist/antd.css';
import 'moment/locale/pt-br';

moment.locale('pt-br');

export default ({ Component, pageProps }: AppProps) => {
  const { session } = pageProps;

  return (
    <Provider options={{ site: process.env.SITE || 'http://localhost:3000' }} session={session}>
      <Component {...pageProps} /> {/* eslint-disable-line */}
    </Provider>
  );
};
