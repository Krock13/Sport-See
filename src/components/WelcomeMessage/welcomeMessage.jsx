/**
 * WelcomeMessage Component
 *
 * This component greets the user with their first name and shows a congratulatory message.
 * If the user's name is not available, it defaults to 'Utilisateur'.
 *
 * @returns {JSX.Element} The rendered component.
 */

// External dependencies
import { useData } from '../../utils/hooks/useData';
import { LoadingAndError } from '../Common/LoadingAndError';

// Styles
import styles from './welcomeMessage.module.css';

export function WelcomeMessage() {
  const { data: contextData, isLoading, error } = useData();

  // Retrieve first name from the data, default to 'Utilisateur' if not available
  const firstName = contextData?.userInfos?.firstName || 'Utilisateur';

  return (
    <div className={styles.welcomeMessageCard}>
      {isLoading || error ? (
        <LoadingAndError isLoading={isLoading} error={error} />
      ) : contextData && Object.keys(contextData).length > 0 ? (
        <>
          {/* Greeting the user by name */}
          <h1>
            Bonjour <span>{firstName}</span>
          </h1>

          {/* Message to congratulate the user for achieving their goals */}
          <p>Félicitation! Vous avez explosé vos objectifs hier 👏</p>
        </>
      ) : null}
    </div>
  );
}
