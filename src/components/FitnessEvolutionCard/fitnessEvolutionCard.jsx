/**
 * FitnessEvolutionCard Component
 *
 * This component is responsible for displaying the fitness evolution chart.
 * It fetches user activity data and renders a bar chart using the Recharts library.
 *
 * @returns {JSX.Element} The rendered component.
 */

import { useData } from '../../utils/hooks/useData';

// External dependencies
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// Utility functions
import { calculateDimensions } from '../../utils/dimensionsUtils';

import { LoadingAndError } from '../Common/LoadingAndError';

// Sub-components
import CustomLegend from './CustomLegend';
import CustomTooltip from './CustomTooltip';

// Styles
import styles from './fitnessEvolutionCard.module.css';

export function FitnessEvolutionCard() {
  const { data: contextData, isLoading, error } = useData();

  const { sessionsActivity } = contextData || {};

  // Prepare chart data
  const chartData = (sessionsActivity || []).map((session, index) => ({
    day: index + 1,
    kilogram: session.kilogram,
    calories: session.calories,
  }));

  // Calculate min, max, and middle values for Y-axis
  const allKilograms = chartData.map((item) => item.kilogram) || [];
  const minimumKilogram = allKilograms.length ? Math.min(...allKilograms) - 5 : 0;
  const maximumKilogram = allKilograms.length ? Math.max(...allKilograms) + 1 : 0;
  const middleValue = (minimumKilogram + maximumKilogram) / 2;

  // Calculate chart dimensions
  const { width, height, marginTop, marginRight, marginLeft, marginBottom } = calculateDimensions(
    835,
    320,
    { marginTop: 112, marginRight: 29, marginLeft: 43, marginBottom: 23 }
  );

  return (
    <div className={styles.fitnessEvolutionCard}>
      {isLoading || error ? (
        <LoadingAndError isLoading={isLoading} error={error} />
      ) : sessionsActivity ? (
        <>
          <CustomLegend />
          {/* Render the Bar Chart */}
          <BarChart
            width={width}
            height={height}
            data={chartData}
            margin={{
              top: marginTop,
              right: marginRight,
              left: marginLeft,
              bottom: marginBottom,
            }}
            barGap='12%'
          >
            <CartesianGrid vertical={false} strokeDasharray='2 4' stroke='#dedede' />
            <Tooltip content={<CustomTooltip />} />
            <XAxis dataKey='day' dy={15.5} tickLine={false} axisLine={false} fontSize='14px' />
            <YAxis
              yAxisId='right'
              orientation='right'
              dx={43}
              tickLine={false}
              axisLine={false}
              domain={[minimumKilogram - 1, maximumKilogram + 1]}
              ticks={[minimumKilogram - 1, middleValue, maximumKilogram + 1]}
              fontSize='14px'
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
        </>
      ) : null}
    </div>
  );
}
