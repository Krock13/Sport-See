import { useFetch } from '../../utils/hooks/fetch';
import { getUser } from '../../../mocks/user.js';

import { macroData } from '../../utils/constants/macroData';
import { FitnessEvolutionCard } from '../FitnessEvolutionCard/fitnessEvolutionCard';
import { PerformanceCard } from '../PerformanceCard/performanceCard';
import { MacroCard } from '../MacroCard/macroCard';

import styles from './dashboard.module.css';

export function Dashboard() {
  const { data, isLoading, error } = useFetch(getUser, 1);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.dashboard}>
      <FitnessEvolutionCard />
      <PerformanceCard />
      <PerformanceCard />
      <PerformanceCard />
      {macroData.map((macro, index) => (
        <MacroCard key={index} {...macro} data={data.keyData} />
      ))}
    </div>
  );
}
