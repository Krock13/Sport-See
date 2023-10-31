/**
 * Home component that renders the main content of the application.
 * @returns {JSX.Element} The rendered JSX element.
 */

// External dependencies
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Local utilities
import { DataContext } from '../../utils/DataContext';

// Components
import { LoadingAndError } from '../../components/Common/LoadingAndError';
import { WelcomeMessage } from '../../components/WelcomeMessage/WelcomeMessage';
import { Dashboard } from '../../components/Dashboard/Dashboard';

// Styles
import styles from './home.module.css';

export function Home() {
  // Contextual data and methods
  const { data, setSource, setUserId, setData, isLoading, error } = useContext(DataContext);

  // Extracting parameters from the URL
  const { source: urlSource, userId: urlUserId } = useParams();

  // Side-effect to update the state based on URL parameters
  useEffect(() => {
    if (data) {
      setSource(urlSource);
      setUserId(urlUserId);
      setData(data);
    }
  }, [data, urlSource, urlUserId, setSource, setUserId, setData]);

  // Render appropriate component for loading or error states
  const loadingOrErrorComponent = <LoadingAndError isLoading={isLoading} error={error} />;

  if (isLoading || error) {
    return <div>{loadingOrErrorComponent}</div>;
  }

  // Default render: Welcome message and dashboard
  return (
    <div className={styles.home}>
      {/* Welcome message at the top of the home page */}
      <WelcomeMessage className={styles.welcomeMessage} />

      {/* Dashboard containing various cards and data visualizations */}
      <Dashboard />
    </div>
  );
}
