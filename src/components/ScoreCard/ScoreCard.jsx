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
    if (!contextData) return [{ name: 'Score par défaut', value: 100 }];
    const scoreValue = contextData.todayScore || contextData.score;
    return [
      { name: 'Score du jour', value: scoreValue * 100 },
      { name: 'Reste', value: (1 - scoreValue) * 100 },
    ];
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
              {/* Main Pie to render the score gauge */}
              <Pie
                data={chartData}
                dataKey='value'
                startAngle={220}
                endAngle={-220}
                innerRadius='70%'
                outerRadius='80%'
                cornerRadius={10}
                isAnimationActive={false}
              >
                {chartData.map((entry, index) => (
                  // Renders each segment of the gauge, applying no stroke to remove the border effect
                  <Cell
                    key={`cell-${index}`}
                    fill={index === 0 ? '#FF0000' : 'transparent'}
                    stroke='none'
                  />
                ))}
              </Pie>
              {/* Overlay Pie to render the white circle covering the gauge's center */}
              <Pie
                data={[{ value: 100 }]}
                dataKey='value'
                innerRadius={0}
                outerRadius='70%'
                fill='white'
                isAnimationActive={false}
              />
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
