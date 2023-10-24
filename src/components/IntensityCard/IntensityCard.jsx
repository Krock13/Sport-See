// External dependencies
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import { useFetch } from '../../utils/hooks/fetch';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

// Mock data
import { getUserPerformance } from '../../../mocks/userPerformance.js';

import styles from './intensityCard.module.css';

export function IntensityCard() {
  const componentRef = useRef(null);
  const [componentSize, setComponentSize] = useState({
    width: 0,
    height: 0,
  });

  const updateComponentDimensions = () => {
    if (componentRef.current) {
      setComponentSize({
        width: componentRef.current.offsetWidth,
        height: componentRef.current.offsetHeight,
      });
    }
  };

  useEffect(() => {
    updateComponentDimensions();
    window.addEventListener('resize', updateComponentDimensions);
    return () => window.removeEventListener('resize', updateComponentDimensions);
  }, []);

  const baseRadius = Math.min(componentSize.width, componentSize.height) * 0.39;
  const polarRadii = [
    0,
    baseRadius * 0.125,
    baseRadius * 0.25,
    baseRadius * 0.5,
    baseRadius * 0.75,
    baseRadius,
  ];

  const baseComponentWidth = 258;
  const baseFontSize = 12;

  const fontSize = (componentSize.width / baseComponentWidth) * baseFontSize;

  const { data, loadingAndErrorComponent } = useFetch(getUserPerformance, 1);

  const translations = {
    intensity: 'Intensité',
    speed: 'Vitesse',
    strength: 'Force',
    endurance: 'Endurance',
    energy: 'Énergie',
    cardio: 'Cardio',
  };

  const order = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Énergie', 'Cardio'];

  function transformAndSort(performanceData) {
    const initialData = performanceData.map((item) => {
      const actualKindString = data.kind[item.kind];
      return {
        subject: translations[actualKindString],
        score: item.value,
      };
    });

    const sortedData = order.map((subjectInOrder) => {
      const foundItem = initialData.find((item) => item.subject === subjectInOrder);
      return foundItem ? foundItem : { subject: subjectInOrder, A: 0 };
    });

    return sortedData;
  }

  const transformedData = data && data.data ? transformAndSort(data.data) : [];

  const TickComponent = (props) => {
    const { x, y, payload, index } = props;
    let offsetX = 0;
    let offsetY = 0;

    switch (index) {
      case 0: // Intensité
        offsetY = -5;
        break;
      case 1: // Vitesse
        offsetX = 10;
        offsetY = -4;
        break;
      case 2: // Force
        offsetX = 8;
        offsetY = 10;
        break;
      case 3: // Endurance
        offsetY = 10;
        break;
      case 4: // Énergie
        offsetX = -8;
        offsetY = 12;
        break;
      case 5: // Cardio
        offsetX = -10;
        offsetY = -2;
        break;
      default:
        break;
    }

    return (
      <text
        x={x + offsetX}
        y={y + offsetY}
        textAnchor='middle'
        fill='#fff'
        fontSize={`${fontSize}px`}
      >
        {payload.value}
      </text>
    );
  };

  TickComponent.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    payload: PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
    index: PropTypes.number,
  };

  return (
    <div ref={componentRef} className={styles.intensityCard}>
      {loadingAndErrorComponent}
      {transformedData.length > 0 && (
        <>
          <ResponsiveContainer width='100%' height='100%'>
            <RadarChart cx='50%' cy='50%' outerRadius='80%' data={transformedData}>
              <PolarGrid gridType='polygon' radialLines={false} polarRadius={polarRadii} />
              <PolarAngleAxis dataKey='subject' stroke='transparent' tick={<TickComponent />} />
              <Radar dataKey='score' fill='#FF0101B2' />
            </RadarChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
}
