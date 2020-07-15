import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';

import { Session } from 'services/auth';

import LoadingScreen from 'src/components/LoadingScreen';

export default function usePublic(onlyUnknownUser = true) {
  const router = useRouter();

  const [session, sessionLoad] = useSession();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionLoad) {
      if (session && onlyUnknownUser) {
        router.push('/');
      } else setLoading(false);
    }
  }, [sessionLoad, session]);

  const isLoading = useCallback(
    (component : JSX.Element) => (loading ? <LoadingScreen /> : component),
    [loading],
  );

  return { loading, isLoading, session: session as Session };
}
