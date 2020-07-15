import React from 'react';

import { signout } from 'next-auth/client';

import { Button } from 'antd';

import usePrivate from 'src/hooks/usePrivate';

import AppLayout from 'src/components/AppLayout';

export default function Home() {
  const { isLoading, session } = usePrivate();

  return isLoading(
    <AppLayout>
      <div>
        {JSON.stringify(session)}
        <div>
          <Button onClick={signout}>Sair</Button>
        </div>
      </div>
    </AppLayout>,
  );
}
