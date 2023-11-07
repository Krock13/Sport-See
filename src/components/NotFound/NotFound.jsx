/**
 * NotFound component that renders when a page is not found.
 * @returns {JSX.Element} The rendered JSX element.
 */
import { Link, useNavigate } from 'react-router-dom';
import { useData } from '../../utils/hooks/useData';

// Styles
import styles from './notFound.module.css';

export function NotFound() {
  const navigate = useNavigate();

  // Custom hook to manage data fetching state and error handling
  const { resetError, refetch } = useData();

  // Handler function to go back to the home page and reset any errors or refetch data if needed
  const handleGoBack = () => {
    resetError();
    refetch();
    navigate('/');
  };

  return (
    <div className={styles.notFoundCard}>
      <h2>Oups ! Problème détecté 🙁</h2>
      <p>La page demandée est introuvable, ou il y a un problème de connexion au serveur.</p>
      <p>
        Vous pouvez retourner à l&apos;
        <Link to='/' className={styles.link} onClick={handleGoBack}>
          Accueil
        </Link>
      </p>
      <p>Ou réessayez plus tard.</p>
    </div>
  );
}
