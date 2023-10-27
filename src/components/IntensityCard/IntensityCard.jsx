/**
 * IntensityCard Component
 *
 * This component is responsible for displaying user performance metrics in a radar chart format.
 * It fetches user performance data and renders a radar chart using the Recharts library.
 * The component is responsive and adapts to the container's size, adjusting the radar's radius and font size accordingly.
 *
 * @returns {JSX.Element} The rendered radar chart showcasing user performance metrics.
 */

// External dependencies
import { useState, useEffect, useRef, useMemo } from 'react';
import { useFetch } from '../../utils/hooks/fetch';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

// Mock data
import { getUserPerformance } from '../../../mocks/userPerformance.js';

// Sub-components
import TickComponent from './TickComponent';

import styles from './intensityCard.module.css';

// Constants to define the radar chart's geometry and styling
const BASE_RADIUS_PERCENTAGE = 0.39;
const POLAR_RADII_PERCENTAGES = [0, 0.125, 0.25, 0.5, 0.75, 1];
const BASE_COMPONENT_WIDTH = 258;
const BASE_FONT_SIZE = 12;

// Translation mapping for performance metrics
const translations = {
  intensity: 'Intensité',
  speed: 'Vitesse',
  strength: 'Force',
  endurance: 'Endurance',
  energy: 'Énergie',
  cardio: 'Cardio',
};

// Defined order for displaying the metrics on the radar chart
const order = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Énergie', 'Cardio'];

export function IntensityCard() {
  // Ref to hold the component's DOM reference for size calculations
  const componentRef = useRef(null);

  // State to manage the component's current size
  const [componentSize, setComponentSize] = useState({
    width: 0,
    height: 0,
  });

  // Calculate the base radius based on the component's size
  const baseRadius = useMemo(() => {
    return Math.min(componentSize.width, componentSize.height) * BASE_RADIUS_PERCENTAGE;
  }, [componentSize]);

  // Calculate polar radii for the radar grid
  const polarRadii = useMemo(() => {
    return POLAR_RADII_PERCENTAGES.map((percentage) => baseRadius * percentage);
  }, [baseRadius]);

  // Compute font size relative to component width
  const fontSize = useMemo(() => {
    return (componentSize.width / BASE_COMPONENT_WIDTH) * BASE_FONT_SIZE;
  }, [componentSize.width]);

  // Update the component's width and height based on its DOM size
  const updateComponentDimensions = () => {
    if (componentRef.current) {
      setComponentSize({
        width: componentRef.current.offsetWidth,
        height: componentRef.current.offsetHeight,
      });
    }
  };

  // Event listener for window resize to adjust the component's size
  useEffect(() => {
    updateComponentDimensions();
    window.addEventListener('resize', updateComponentDimensions);
    return () => window.removeEventListener('resize', updateComponentDimensions);
  }, []);

  // Fetch the user's performance data
  const { data, loadingAndErrorComponent } = useFetch(getUserPerformance, 1);

  // Transform the performance data for display, and order it
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

  // Transform fetched data for display on the radar chart
  const { data: fetchedData } = data;
  const transformedData = fetchedData ? transformAndSort(fetchedData) : [];

  return (
    // Render the radar chart inside a responsive container
    <div ref={componentRef} className={styles.intensityCard}>
      {loadingAndErrorComponent}
      {transformedData.length > 0 && (
        <>
          <ResponsiveContainer width='100%' height='100%'>
            <RadarChart cx='50%' cy='50%' outerRadius='80%' data={transformedData}>
              <PolarGrid gridType='polygon' radialLines={false} polarRadius={polarRadii} />
              <PolarAngleAxis
                dataKey='subject'
                stroke='transparent'
                tick={<TickComponent fontSize={fontSize} />}
              />
              <Radar dataKey='score' fill='#FF0101B2' />
            </RadarChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
}
