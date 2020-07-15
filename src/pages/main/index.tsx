import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import usePrivate from 'src/hooks/usePrivate';

import AppLayout from 'src/components/AppLayout';

export default function Home() {
  const { isLoading, loading } = usePrivate();
  const router = useRouter();

  useEffect(() => {
    if (!loading) router.push('/importar');
  }, [loading]);

  return isLoading(
    <AppLayout>
      <div />
    </AppLayout>,
  );
}
