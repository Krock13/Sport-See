/**
 * Dashboard component that displays various cards and information.
 */

// External dependencies
import { useFetch } from '../../utils/hooks/fetch';

// Mock data
import { getUser } from '../../../mocks/user.js';

// Constants
import { macroData } from '../../utils/constants/macroData';

// Components
import { FitnessEvolutionCard } from '../FitnessEvolutionCard/fitnessEvolutionCard';
import { PerformanceCard } from '../PerformanceCard/performanceCard';
import { MacroCard } from '../MacroCard/macroCard';

// Styles
import styles from './dashboard.module.css';

export function Dashboard() {
  // Fetch user data
  const { data, isLoading, error } = useFetch(getUser, 1);

  // Loading state
  if (isLoading) return <p>Loading...</p>;

  // Error state
  if (error) return <p>Error: {error}</p>;

  // Render dashboard
  return (
    <div className={styles.dashboard}>
      {/* Render Fitness Evolution Card */}
      <div className={styles.fitnessEvolutionCard}>
        <FitnessEvolutionCard />
      </div>

      {/* Render Performance Cards */}
      <div className={styles.performanceCards}>
        <PerformanceCard />
        <PerformanceCard />
        <PerformanceCard />
      </div>

      {/* Render Macro Cards */}
      <div className={styles.macroCards}>
        {macroData.map((macro, index) => (
          <MacroCard key={index} {...macro} data={data.keyData} />
        ))}
      </div>
    </div>
  );
}
