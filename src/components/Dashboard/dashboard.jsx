/**
 * Dashboard component that displays various cards and information.
 * @returns {JSX.Element} The rendered JSX element.
 */

// External dependencies
import { useFetch } from '../../utils/hooks/fetch';

// Mock data
import { getUser } from '../../../mocks/user.js';

// Constants
import { macroData } from '../../utils/constants/macroData';

// Components
import { FitnessEvolutionCard } from '../FitnessEvolutionCard/FitnessEvolutionCard';
import { SessionTimeCard } from '../SessionTimeCard/SessionTimeCard';
import { IntensityCard } from '../IntensityCard/IntensityCard';
import { ScoreCard } from '../ScoreCard/ScoreCard';
import { MacroCard } from '../MacroCard/MacroCard';

// Styles
import styles from './dashboard.module.css';

export function Dashboard() {
  // Fetch user data
  const { data, loadingAndErrorComponent } = useFetch(getUser, 1);

  // Render dashboard
  return (
    <div className={styles.dashboard}>
      {loadingAndErrorComponent}

      {Object.keys(data).length > 0 && (
        <>
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

          {/* Render Macro Cards */}
          <div className={styles.macroCards}>
            {macroData.map((macro, index) => (
              <MacroCard key={index} {...macro} data={data.keyData} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
