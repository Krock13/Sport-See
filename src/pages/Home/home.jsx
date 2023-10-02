import { WelcomeMessage } from '../../components/WelcomeMessage/welcomeMessage';

import styles from './home.module.css';

export function Home() {
  return (
    <div className={styles.home}>
      <WelcomeMessage />
    </div>
  );
}
