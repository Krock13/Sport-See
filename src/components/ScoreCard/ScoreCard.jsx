// External dependencies
import { useFetch } from '../../utils/hooks/fetch';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Mock data
import { getUser } from '../../../mocks/user.js';

import styles from './scoreCard.module.css';

export function ScoreCard() {
  const { data, loadingAndErrorComponent } = useFetch(getUser, 1);

  let chartData = [
    {
      name: 'Score par défaut',
      value: 0,
    },
  ];

  if (data) {
    chartData = [
      {
        name: 'Score du jour',
        value: data.todayScore * 100,
      },
    ];
  }

  return (
    <div className={styles.scoreCard}>
      {loadingAndErrorComponent}
      {data && (
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
