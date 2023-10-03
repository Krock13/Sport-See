import { WelcomeMessage } from '../../components/WelcomeMessage/welcomeMessage';
import { Dashboard } from '../../components/Dashboard/dashboard';

import styles from './home.module.css';

export function Home() {
  return (
    <div className={styles.home}>
      <WelcomeMessage className={styles.welcomeMessage} />
      <Dashboard />
    </div>
  );
}
