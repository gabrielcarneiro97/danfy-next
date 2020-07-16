import { useState, useEffect } from 'react';
import { request } from 'graphql-request';

export default function useGQL(query, variables?, lazyMode = false) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setLoading(true);
    try {
      const res = await request('/api/graphql', query, variables);
      setData(res);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!lazyMode) fetch();
  }, []);

  return {
    data,
    error,
    loading,
    fetch,
    refetch: fetch,
  };
}
