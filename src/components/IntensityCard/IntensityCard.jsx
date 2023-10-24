// External dependencies
import { useFetch } from '../../utils/hooks/fetch';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

// Mock data
import { getUserPerformance } from '../../../mocks/userPerformance.js';

import styles from './intensityCard.module.css';

export function IntensityCard() {
  const { data, loadingAndErrorComponent } = useFetch(getUserPerformance, 1);
  // console.log('data : ', data);

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
    // Traduire et créer un tableau initial
    const initialData = performanceData.map((item) => {
      const actualKindString = data.kind[item.kind];
      return {
        subject: translations[actualKindString],
        score: item.value,
      };
    });

    // Trier selon l'ordre prédéfini
    const sortedData = order.map((subjectInOrder) => {
      const foundItem = initialData.find((item) => item.subject === subjectInOrder);
      return foundItem ? foundItem : { subject: subjectInOrder, A: 0 };
    });
    // console.log('sortedData : ', sortedData);

    return sortedData;
  }

  const transformedData = data && data.data ? transformAndSort(data.data) : [];
  // console.log('transformedData : ', transformedData);

  return (
    <div className={styles.intensityCard}>
      {loadingAndErrorComponent}
      {transformedData.length > 0 && (
        <>
          <ResponsiveContainer width='100%' height='100%'>
            <RadarChart cx='50%' cy='50%' outerRadius='80%' data={transformedData}>
              <PolarGrid />
              <PolarAngleAxis dataKey='subject' />
              <PolarRadiusAxis tick={false} />
              <Radar dataKey='score' fill='#FF0101B2' />
            </RadarChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
}
