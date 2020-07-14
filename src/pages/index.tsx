import React from 'react';
import { GetServerSideProps } from 'next';
import { isAuth, Session } from 'services/auth';

import { signout } from 'next-auth/client';

import usePrivate from 'src/hooks/usePrivate';
import { Button } from 'antd';

type Props = {
  session : Session | null,
}

export default function Home({ session } : Props) {
  const { isLoading } = usePrivate();

  return isLoading(
    <>
      <div>
        {JSON.stringify(session)}
        <div>
          <Button onClick={signout}>Sair</Button>
        </div>
      </div>
    </>,
  );
}

export const getServerSideProps : GetServerSideProps<Props> = async (context) => ({
  props: {
    session: await isAuth(context),
  },
});
