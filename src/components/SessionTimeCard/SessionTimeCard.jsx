import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

// External dependencies
import { useFetch } from '../../utils/hooks/fetch';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data
import { getUserAverageSessions } from '../../../mocks/userAverageSessions.js';

// Styles
import styles from './sessionTimeCard.module.css';

export function SessionTimeCard() {
  const [showRect, setShowRect] = useState(false);
  const [rectX, setRectX] = useState(0);
  const [rectWidth, setRectWidth] = useState(0);
  const [chartMargin] = useState({ top: 86, right: 10, left: 10, bottom: 16 });

  const chartContainerRef = useRef(null);
  const rectHeight = '100%';

  useEffect(() => {
    const chartContainer = chartContainerRef.current;
    if (chartContainer) {
      setRectWidth(chartContainer.clientWidth - rectX);
    }
  }, [rectX, chartMargin]);

  const { data, loadingAndErrorComponent } = useFetch(getUserAverageSessions, 1);

  const mapDayToName = (day) => {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return days[day - 1];
  };

  let transformedData = [];

  if (data && data.sessions) {
    transformedData = data.sessions.map((session) => {
      return {
        name: mapDayToName(session.day),
        uv: session.sessionLength,
      };
    });
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: '#FFF',
            border: '1px solid #ccc',
            padding: '2px',
            fontSize: '8px',
            width: '39px',
            height: '25px',
            textAlign: 'center',
            lineHeight: '25px',
          }}
        >
          {`${payload[0].value} min`}
        </div>
      );
    }

    return null;
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
      {loadingAndErrorComponent}
      {data && (
        <>
          <div className={styles.sessionTimeCardTitle}>Durée moyenne des sessions</div>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart
              data={transformedData}
              margin={chartMargin}
              onMouseMove={(e) => {
                if (e && e.activeCoordinate && e.activeCoordinate.x) {
                  setShowRect(true);
                  setRectX(e.activeCoordinate.x);
                }
              }}
              onMouseLeave={() => setShowRect(false)}
            >
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
              <Tooltip content={<CustomTooltip />} cursor={false} />
              <Line
                type='natural'
                dataKey='uv'
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
              <defs>
                <linearGradient id='colorUv' x1='0%' y1='0' x2='100%' y2='0'>
                  <stop offset='0%' stopColor='rgba(255, 255, 255, 0.3)' />
                  <stop offset='20%' stopColor='rgba(255, 255, 255, 0.4)' />
                  <stop offset='40%' stopColor='rgba(255, 255, 255, 0.5)' />
                  <stop offset='60%' stopColor='rgba(255, 255, 255, 0.6)' />
                  <stop offset='100%' stopColor='rgba(255, 255, 255, 1)' />
                </linearGradient>
              </defs>
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
      )}
    </div>
  );
}
