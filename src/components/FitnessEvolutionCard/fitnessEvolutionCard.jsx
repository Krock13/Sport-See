import { useFetch } from '../../utils/hooks/fetch';
import { getUserActivity } from '../../../mocks/userActivity.js';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import PropTypes from 'prop-types';

import styles from './fitnessEvolutionCard.module.css';

// Custom Legend
const CustomLegend = () => (
  <div className={styles.customLegend}>
    <div className={styles.graphTitle}>Activité quotidienne</div>
    <div className={styles.unitWrapper}>
      <div className={styles.inlineBlock}>
        <span className={`${styles.circle} ${styles.backgroundGray}`}></span>
        <span className={styles.fontSize14}>Poids (kg)</span>
      </div>
      <div className={styles.inlineBlock}>
        <span className={`${styles.circle} ${styles.backgroundRed}`}></span>
        <span className={styles.fontSize14}>Calories brûlées (kCal)</span>
      </div>
    </div>
  </div>
);

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: 'rgba(230, 0, 0, 1)',
          padding: '5px',
          width: '39px',
          height: '63px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p style={{ margin: 0, color: 'white', fontSize: '7px' }}>{`${payload[0].value}Kg`}</p>
        </div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p style={{ margin: 0, color: 'white', fontSize: '7px' }}>{`${payload[1].value}Kcal`}</p>
        </div>
      </div>
    );
  }

  return null;
};

export function FitnessEvolutionCard() {
  const { data, isLoading, error } = useFetch(getUserActivity, 1);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const chartData = data.sessions.map((session, index) => ({
    day: index + 1,
    kilogram: session.kilogram,
    calories: session.calories,
  }));

  const allKilograms = chartData.map((item) => item.kilogram);
  const minKg = Math.min(...allKilograms) - 5;
  const maxKg = Math.max(...allKilograms) + 1;
  const middleValue = (minKg + maxKg) / 2;

  return (
    <div className={styles.fitnessEvolutionCard}>
      <CustomLegend />
      <BarChart
        width={835} // Largeur totale du composant
        height={320} // Hauteur totale du composant
        data={chartData}
        margin={{
          top: 112,
          right: 90,
          left: 43,
          bottom: 63,
        }}
      >
        <CartesianGrid vertical={false} strokeDasharray='2 4' stroke='#dedede' />
        <Tooltip content={<CustomTooltip />} />
        <XAxis dataKey='day' dy={15.5} tickLine={false} axisLine={false} />
        <YAxis
          yAxisId='right'
          orientation='right'
          dx={43}
          tickLine={false}
          axisLine={false}
          domain={[minKg - 1, maxKg + 1]}
          ticks={[minKg - 1, middleValue, maxKg + 1]}
        />
        <YAxis yAxisId='left' orientation='left' hide={true} />
        <Bar
          yAxisId='right'
          dataKey='kilogram'
          fill='rgba(40, 45, 48, 1)'
          barSize={7}
          radius={[20, 20, 0, 0]}
        />
        <Bar
          yAxisId='left'
          dataKey='calories'
          fill='rgba(230, 0, 0, 1)'
          barSize={7}
          radius={[20, 20, 0, 0]}
        />
      </BarChart>
    </div>
  );
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    })
  ),
};
