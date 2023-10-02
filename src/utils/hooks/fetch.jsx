import { useState, useEffect } from 'react';

// Custom hook for fetching data from a URL
export function useFetch(urlOrFunction, userId) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true; // Track component mount status
    setLoading(true);

    async function fetchData() {
      try {
        let response;
        if (typeof urlOrFunction === 'function') {
          response = await urlOrFunction(userId);
        } else {
          const fetchResponse = await fetch(urlOrFunction);
          response = await fetchResponse.json();
        }
        if (isMounted) {
          setData(response.data);
        }
      } catch (err) {
        console.log(err);
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    // Cleanup: set isMounted to false when component unmounts
    return () => {
      isMounted = false;
    };
  }, [urlOrFunction, userId]);

  return { data, isLoading, error };
}
