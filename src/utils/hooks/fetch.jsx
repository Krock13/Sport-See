/**
 * Custom React hook for fetching data.
 * @param {string|function} urlOrFunction - The URL to fetch from or a function that returns data.
 * @param {number} userId - The user ID for fetching user-specific data.
 * @returns {object} An object containing the fetched data, loading status, and any error message.
 */
import { useState, useEffect } from 'react';

export function useFetch(urlOrFunction, userId) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true; // To prevent state update after the component has been unmounted
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
