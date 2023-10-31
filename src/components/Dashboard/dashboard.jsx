/**
 * Dashboard component that displays various cards and information.
 * @returns {JSX.Element} The rendered JSX element.
 */

// External hooks
import { useData } from '../../utils/hooks/useData';

// Constants
import { macroData } from '../../utils/constants/macroData';

// Components
import { FitnessEvolutionCard } from '../FitnessEvolutionCard/FitnessEvolutionCard';
import { SessionTimeCard } from '../SessionTimeCard/SessionTimeCard';
import { IntensityCard } from '../IntensityCard/IntensityCard';
import { ScoreCard } from '../ScoreCard/ScoreCard';
import { MacroCard } from '../MacroCard/MacroCard';
import { LoadingAndError } from '../Common/LoadingAndError';

// Styles
import styles from './dashboard.module.css';

export function Dashboard() {
  const { data: contextData, isLoading, error } = useData();

  // Handle loading or error state
  if (isLoading || error) {
    return <LoadingAndError isLoading={isLoading} error={error} />;
  }

  // Check if data exists before rendering content
  if (Object.keys(contextData).length === 0) {
    return null;
  }

  // Render dashboard
  return (
    <div className={styles.dashboard}>
      {/* Render Fitness Evolution Card */}
      <div className={styles.fitnessEvolutionCard}>
        <FitnessEvolutionCard />
      </div>

      {/* Render Performance Cards */}
      <div className={styles.performanceCards}>
        <SessionTimeCard />
        <IntensityCard />
        <ScoreCard />
      </div>

      {/* Render Macro Cards based on provided macroData */}
      <div className={styles.macroCards}>
        {macroData.map((macro, index) => (
          <MacroCard key={index} {...macro} data={contextData.keyData} />
        ))}
      </div>
    </div>
  );
}
