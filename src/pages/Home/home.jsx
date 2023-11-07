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
import { NotFound } from '../../components/NotFound/NotFound';
import { LoadingAndError } from '../../components/Common/LoadingAndError';
import { WelcomeMessage } from '../../components/WelcomeMessage/WelcomeMessage';
import { Dashboard } from '../../components/Dashboard/Dashboard';

// Styles
import styles from './home.module.css';

export function Home() {
  // Contextual data and methods
  const { source, userId, setSource, setUserId, isLoading, error } = useContext(DataContext);

  // Extracting parameters from the URL
  const { source: urlSource, userId: urlUserId } = useParams();

  // Side-effect to update the state based on URL parameters
  useEffect(() => {
    if (urlSource && urlUserId && (urlSource !== source || urlUserId !== userId)) {
      setSource(urlSource);
      setUserId(urlUserId);
    }
  }, [urlSource, urlUserId, source, userId, setSource, setUserId]);

  // Render appropriate component for loading or error states
  const loadingOrErrorComponent = <LoadingAndError isLoading={isLoading} />;

  if (isLoading) {
    return <div>{loadingOrErrorComponent}</div>;
  }

  if (error) {
    return <NotFound />;
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
