/**
 * Custom React hook to access the DataContext.
 *
 * Provides an abstraction to use the DataContext and ensures that the hook is used within the context of a DataProvider.
 * If not, it throws an error.
 *
 * @returns {object} The context from DataContext.
 * @throws {Error} When the hook is not used within a DataProvider.
 */

import { useContext } from 'react';
import { DataContext } from '../DataContext';

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData doit être utilisé à l'intérieur d'un DataProvider");
  }
  return context;
};
