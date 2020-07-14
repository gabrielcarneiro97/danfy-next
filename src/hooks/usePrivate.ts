import { useEffect, useState } from 'react';
import { useSession, signin } from 'next-auth/client';

export default function usePrivate() {
  const [session, sessionLoad] = useSession();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionLoad) {
      if (!session) signin();
      else setLoading(false);
    }
  }, [sessionLoad, session]);

  return { loading };
}
