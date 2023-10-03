import styles from './welcomeMessage.module.css';

export function WelcomeMessage() {
  return (
    <div className={styles.welcomeMessageCard}>
      <h1>
        Bonjour <span>Thomas</span>
      </h1>
      <p>Félicitation! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}
