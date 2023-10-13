/**
 * Custom React hook for fetching data.
 * @param {string|function} urlOrFunction - The URL to fetch from or a function that returns data.
 * @param {number} userId - The user ID for fetching user-specific data.
 * @returns {object} An object containing the fetched data, loading status, and any error message.
 */

import { useState, useEffect } from 'react';
import { LoadingAndError } from '../../components/Common/LoadingAndError';

export function useFetch(urlOrFunction, userId) {
  // State variables to hold fetched data, loading status, and any error messages
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Flag to prevent state updates after the component has been unmounted
    let isMounted = true;
    setLoading(true);

    // Function to fetch data asynchronously
    async function fetchData() {
      try {
        let response;
        // Check if the input is a function or a URL
        if (typeof urlOrFunction === 'function') {
          response = await urlOrFunction(userId);
        } else {
          const fetchResponse = await fetch(urlOrFunction);
          response = await fetchResponse.json();
        }
        // Update state only if the component is still mounted
        if (isMounted) {
          setData(response.data);
        }
      } catch (err) {
        console.error(err); // Log the error to the console
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

  // Generate the loading and error component
  const loadingAndErrorComponent = <LoadingAndError isLoading={isLoading} error={error} />;

  return { data, loadingAndErrorComponent };
}
