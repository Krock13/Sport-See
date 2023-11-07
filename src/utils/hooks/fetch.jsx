/**
 * Custom React hook for fetching data.
 * @param {string} source - The source from which to fetch the data.
 *                          Accepts 'mock' for mock data or 'api' for API data.
 * @param {number} userId - The user ID for fetching user-specific data.
 * @returns {object} An object containing the fetched data, loading status, and any error message.
 */

// Custom React hook for fetching data.
import { useState, useEffect, useRef } from 'react';

import { getUser } from '../../../mocks/user.js';
import { getUserActivity } from '../../../mocks/userActivity.js';
import { getUserAverageSessions } from '../../../mocks/userAverageSessions.js';
import { getUserPerformance } from '../../../mocks/userPerformance.js';

export function useFetch(source, userId) {
  // State variables to hold fetched data, loading status, and any error messages
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useRef to avoid refetching data after an unwanted state change
  const shouldRefetch = useRef(false);

  // Function to reset error messages
  const resetError = () => setError(null);

  // Function to trigger a data reload
  const refetch = () => {
    shouldRefetch.current = true;
    resetError();
    setLoading(true);
  };

  useEffect(() => {
    // Flag to prevent state updates after the component has been unmounted
    let isMounted = true;
    setLoading(true);

    // Consolidate data from different fetches or mock functions
    const consolidateData = (
      userData,
      userActivityData,
      userAverageSessionsData,
      userPerformanceData
    ) => {
      const { sessions: sessionsActivity, ...restOfUserActivity } = userActivityData.data;
      const { sessions: sessionsAverage, ...restOfUserAverageSessions } =
        userAverageSessionsData.data;
      return {
        ...userData.data,
        ...restOfUserActivity,
        sessionsActivity,
        ...restOfUserAverageSessions,
        sessionsAverage,
        ...userPerformanceData.data,
      };
    };

    // Function to fetch data asynchronously
    async function fetchData() {
      try {
        let response;
        if (source === 'mock') {
          const userIdNumber = Number(userId);
          const results = await Promise.all([
            getUser(userIdNumber),
            getUserActivity(userIdNumber),
            getUserAverageSessions(userIdNumber),
            getUserPerformance(userIdNumber),
          ]);

          response = consolidateData(...results);
        } else if (source === 'api') {
          const userData = await fetch(`http://localhost:3000/user/${userId}`).then((res) =>
            res.json()
          );
          const userActivityData = await fetch(
            `http://localhost:3000/user/${userId}/activity`
          ).then((res) => res.json());
          const userAverageSessionsData = await fetch(
            `http://localhost:3000/user/${userId}/average-sessions`
          ).then((res) => res.json());
          const userPerformanceData = await fetch(
            `http://localhost:3000/user/${userId}/performance`
          ).then((res) => res.json());

          response = consolidateData(
            userData,
            userActivityData,
            userAverageSessionsData,
            userPerformanceData
          );
        }

        // Update state only if the component is still mounted
        if (isMounted) {
          setData(response);
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
  }, [source, userId]);

  return { data, isLoading, error, resetError, refetch };
}
