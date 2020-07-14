import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';

export default ({ Component, pageProps }: AppProps) => {
  const { session } = pageProps;
  return (
    <Provider options={{ site: process.env.SITE || 'http://localhost:3000' }} session={session}>
      <Component {...pageProps} /> {/* eslint-disable-line */}
    </Provider>
  );
};
