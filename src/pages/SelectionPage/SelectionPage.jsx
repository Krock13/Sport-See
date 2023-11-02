import { useNavigate } from 'react-router-dom';

import styles from './selectionPage.module.css';

/**
 * This component allows the user to select a data source (mock or API) and a specific user ID.
 * Upon selection, the user will be navigated to the home page with the chosen configuration.
 */
export const SelectionPage = () => {
  const navigate = useNavigate();

  /**
   * Navigate to the home page with the selected source and user ID.
   * @param {string} selectedSource - The chosen data source (mock or API).
   * @param {string} selectedUserId - The chosen user ID.
   */
  const handleChoice = (selectedSource, selectedUserId) => {
    navigate(`/home/${selectedSource}/${selectedUserId}`);
  };

  return (
    <div className={styles.selectionPage}>
      <h2>Choisir la source et le userId :</h2>
      <button onClick={() => handleChoice('mock', 1)}>Mock: User1</button>
      <button onClick={() => handleChoice('mock', 2)}>Mock: User2</button>
      <button onClick={() => handleChoice('api', '12')}>API: User1</button>
      <button onClick={() => handleChoice('api', '18')}>API: User2</button>
    </div>
  );
};
