/**
 * NotFound component that renders when a page is not found.
 * @returns {JSX.Element} The rendered JSX element.
 */
import { Link } from 'react-router-dom';

// Styles
import styles from './notFound.module.css';

export function NotFound() {
  return (
    <div className={styles.notFoundCard}>
      <h2>Oops! Page non trouvée 🙁</h2>
      <p>La page n&apos;existe pas.</p>
      {/* Link to return to the home page */}
      <p>
        Retour à l&apos;<Link to='/'>accueil</Link>.
      </p>
    </div>
  );
}
