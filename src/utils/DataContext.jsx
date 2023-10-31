/**
 * Provides a React context for managing and accessing data fetched based on source and userId.
 *
 * @typedef {object} DataContextProps
 * @property {object|null} data - The fetched data.
 * @property {Function} setData - Function to set the fetched data.
 * @property {string} source - Source type ('mock' or other types).
 * @property {Function} setSource - Function to set the data source.
 * @property {number} userId - The user ID for fetching user-specific data.
 * @property {Function} setUserId - Function to set the user ID.
 * @property {boolean} isLoading - Whether the data is currently being fetched.
 * @property {string|null} error - Any error message encountered during fetching.
 *
 * @module DataContext
 */

import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useFetch } from './hooks/fetch';

export const DataContext = createContext();

/**
 * Provides a context provider that fetches and manages data based on the source and userId.
 * Uses the custom useFetch hook for data fetching.
 *
 * @param {object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - React components or elements wrapped by the provider.
 * @returns {JSX.Element} The JSX rendered component.
 */

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [source, setSource] = useState('mock');
  const [userId, setUserId] = useState(1);

  const { data: fetchedData, isLoading, error } = useFetch(source, userId);

  useEffect(() => {
    setData(fetchedData);
  }, [fetchedData]);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        source,
        setSource,
        userId,
        setUserId,
        isLoading,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
