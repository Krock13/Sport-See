/**
 * SessionTimeCard Component
 *
 * This component is responsible for visualizing the user's average session times on a line chart.
 * It fetches user average session data and displays it on a line chart using the Recharts library.
 *
 * @returns {JSX.Element} The rendered component.
 */

// Styles
import styles from './sessionTimeCard.module.css';

// External dependencies
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useData } from '../../utils/hooks/useData';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { LoadingAndError } from '../Common/LoadingAndError';

export function SessionTimeCard() {
  // State for controlling the rectangle overlay
  const [showRect, setShowRect] = useState(false);
  const [rectX, setRectX] = useState(0);
  const [rectWidth, setRectWidth] = useState(0);
  // Static chart margin definition
  const [chartMargin] = useState({ top: 86, right: 10, left: 10, bottom: 16 });

  // Reference for the chart container
  const chartContainerRef = useRef(null);
  const rectHeight = '100%';

  // Recalculate rectangle width on chart hover
  useEffect(() => {
    const chartContainer = chartContainerRef.current;
    if (chartContainer) {
      setRectWidth(chartContainer.clientWidth - rectX);
    }
  }, [rectX, chartMargin]);

  const { data: contextData, isLoading, error } = useData();

  // Helper function to map day numbers to names
  const mapDayToName = (day) => {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return days[day - 1];
  };

  // Transforming fetched data for chart rendering
  let transformedData =
    contextData?.sessionsAverage?.map((session) => {
      return {
        name: mapDayToName(session.day),
        sessionDuration: session.sessionLength,
      };
    }) || [];

  // Custom tooltip for chart data points
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return <div className={styles.sessionTimeCardTooltip}>{`${payload[0].value} min`}</div>;
    }
    return null;
  };

  const handleMouseMove = (e) => {
    if (e && e.activeCoordinate && e.activeCoordinate.x) {
      setShowRect(true);
      setRectX(e.activeCoordinate.x);
    }
  };

  const handleMouseLeave = () => {
    setShowRect(false);
  };

  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.any,
      })
    ),
    label: PropTypes.any,
  };

  return (
    <div className={styles.sessionTimeCard} ref={chartContainerRef}>
      {isLoading || error ? (
        <LoadingAndError isLoading={isLoading} error={error} />
      ) : contextData ? (
        <>
          {/* Chart title */}
          <div className={styles.sessionTimeCardTitle}>Durée moyenne des sessions</div>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart
              data={transformedData}
              margin={chartMargin}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* X and Y Axis styling */}
              <XAxis
                dataKey='name'
                stroke='white'
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: '12px', opacity: '0.5' }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                type='number'
                domain={['dataMin - 10', 'dataMax + 10']}
                hide={true}
              />
              {/* Custom tooltip and line rendering */}
              <Tooltip content={<CustomTooltip />} cursor={false} />
              <Line
                type='natural'
                dataKey='sessionDuration'
                stroke='url(#colorUv)'
                strokeWidth={2}
                dot={false}
                activeDot={{
                  fill: '#FFF',
                  r: 5,
                  strokeWidth: 10,
                  strokeOpacity: 0.4,
                }}
              />
              {/* Linear gradient for the line */}
              <defs>
                <linearGradient id='colorUv' x1='0%' y1='0' x2='100%' y2='0'>
                  <stop offset='0%' stopColor='rgba(255, 255, 255, 0.3)' />
                  <stop offset='20%' stopColor='rgba(255, 255, 255, 0.4)' />
                  <stop offset='40%' stopColor='rgba(255, 255, 255, 0.5)' />
                  <stop offset='60%' stopColor='rgba(255, 255, 255, 0.6)' />
                  <stop offset='100%' stopColor='rgba(255, 255, 255, 1)' />
                </linearGradient>
              </defs>
              {/* Rectangle overlay rendering */}
              {showRect && (
                <rect
                  x={rectX}
                  y={0}
                  width={rectWidth}
                  height={rectHeight}
                  fill='rgba(0, 0, 0, 0.1)'
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </>
      ) : null}
    </div>
  );
}
