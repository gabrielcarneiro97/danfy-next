import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';

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

  return { loading };
}
