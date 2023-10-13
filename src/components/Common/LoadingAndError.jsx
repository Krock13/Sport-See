/**
 * LoadingAndError Component
 *
 * This component is responsible for displaying loading and error states.
 * It is a common component that can be reused across different parts of the application.
 *
 * @param {boolean} isLoading - Indicates whether the data is still loading.
 * @param {string} error - Contains the error message if an error occurs.
 */

import PropTypes from 'prop-types';

export function LoadingAndError({ isLoading, error }) {
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return null;
}

// PropTypes for LoadingAndError component
LoadingAndError.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Error),
    PropTypes.oneOf([null]),
  ]),
};
