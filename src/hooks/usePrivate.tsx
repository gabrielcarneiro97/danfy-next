import React, { useEffect, useState, useCallback } from 'react';

import { useSession, signin } from 'next-auth/client';
import LoadingScreen from 'src/components/LoadingScreen';

import { Session } from 'services/auth';

export default function usePrivate() {
  const [session, sessionLoad] = useSession();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionLoad) {
      if (!session) signin();
      else setLoading(false);
    }
  }, [sessionLoad, session]);

  const isLoading = useCallback(
    (component : JSX.Element) => (loading ? <LoadingScreen /> : component),
    [loading],
  );

  return { loading, isLoading, session: session as Session };
}
