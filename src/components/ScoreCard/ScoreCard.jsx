// External dependencies
import { useData } from '../../utils/hooks/useData';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

import { LoadingAndError } from '../Common/LoadingAndError';

import styles from './scoreCard.module.css';

/**
 * ScoreCard Component
 *
 * Displays a user's daily score in a pie chart format.
 * The score represents the user's progress towards their daily goal.
 */
export function ScoreCard() {
  const { data: contextData, isLoading, error } = useData();

  // Generates chart data based on the user's score.
  const getChartData = () => {
    if (!contextData) return [{ name: 'Score par défaut', value: 0 }];
    const scoreValue = contextData.todayScore || contextData.score;
    return [{ name: 'Score du jour', value: scoreValue * 100 }];
  };

  // Renders loading or error components based on current state.
  const renderLoadingOrError = () => {
    return isLoading || error ? <LoadingAndError isLoading={isLoading} error={error} /> : null;
  };

  const chartData = getChartData();

  return (
    <div className={styles.scoreCard}>
      {renderLoadingOrError()}
      {contextData && (
        <>
          <h3 className={styles.titleScoreCard}>Score</h3>
          <ResponsiveContainer width='100%' height='100%'>
            <PieChart>
              <Pie
                data={chartData}
                dataKey='value'
                startAngle={220}
                endAngle={0}
                innerRadius='70%'
                outerRadius='80%'
                fill='#FF0000'
                cornerRadius={10}
                isAnimationActive={false}
              >
                <Cell key={'cell-0'} fill={'#FF0000'} />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className={styles.targetContainer}>
            <div className={styles.targetPercent}>{chartData[0].value}%</div>
            <div className={styles.targetText}>de votre</div>
            <div className={styles.targetText}>objectif</div>
          </div>
        </>
      )}
    </div>
  );
}
