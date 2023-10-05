/**
 * WelcomeMessage component that greets the user and shows a congratulatory message.
 * @returns {JSX.Element} The rendered JSX element.
 */
import styles from './welcomeMessage.module.css';

export function WelcomeMessage() {
  return (
    <div className={styles.welcomeMessageCard}>
      {/* Greeting the user by name */}
      <h1>
        Bonjour <span>Thomas</span>
      </h1>

      {/* Congratulatory message for achieving goals */}
      <p>Félicitation! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}
