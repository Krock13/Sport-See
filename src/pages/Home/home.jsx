/**
 * Home component that renders the main content of the application.
 * @returns {JSX.Element} The rendered JSX element.
 */
import { WelcomeMessage } from '../../components/WelcomeMessage/welcomeMessage';
import { Dashboard } from '../../components/Dashboard/dashboard';

import styles from './home.module.css';

export function Home() {
  return (
    <div className={styles.home}>
      {/* Welcome message at the top of the home page */}
      <WelcomeMessage className={styles.welcomeMessage} />

      {/* Dashboard containing various cards and data visualizations */}
      <Dashboard />
    </div>
  );
}
