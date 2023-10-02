import { useFetch } from '../../utils/hooks/fetch';
import { getUser } from '../../../mocks/user.js';

import { FitnessEvolutionCard } from '../FitnessEvolutionCard/fitnessEvolutionCard';
import { PerformanceCard } from '../PerformanceCard/performanceCard';
import { MacroCard } from '../MacroCard/macroCard';

import styles from './dashboard.module.css';

export function Dashboard() {
  const { data, isLoading, error } = useFetch(getUser, 1);
  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = data.keyData;

  return (
    <div className={styles.dashboard}>
      <FitnessEvolutionCard />
      <PerformanceCard />
      <PerformanceCard />
      <PerformanceCard />
      <MacroCard title='Calories' count={calorieCount} />
      <MacroCard title='Protéines' count={proteinCount} />
      <MacroCard title='Glucides' count={carbohydrateCount} />
      <MacroCard title='Lipides' count={lipidCount} />
    </div>
  );
}
