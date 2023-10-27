/**
 * WelcomeMessage component that greets the user and shows a congratulatory message.
 * @returns {JSX.Element} The rendered JSX element.
 */

// External dependencies
import { useFetch } from '../../utils/hooks/fetch';

// Mock data
import { getUser } from '../../../mocks/user.js';

// Styles
import styles from './welcomeMessage.module.css';

export function WelcomeMessage() {
  // Fetch user data
  const { data, loadingAndErrorComponent } = useFetch(getUser, 1);

  // Retrieve first name from the data, default to 'Utilisateur' if not available
  const firstName = data?.userInfos?.firstName || 'Utilisateur';

  return (
    <div className={styles.welcomeMessageCard}>
      {loadingAndErrorComponent}

      {data && Object.keys(data).length > 0 && (
        <>
          {/* Greeting the user by name */}
          <h1>
            Bonjour <span>{firstName}</span>
          </h1>

          {/* Congratulatory message for achieving goals */}
          <p>Félicitation! Vous avez explosé vos objectifs hier 👏</p>
        </>
      )}
    </div>
  );
}
