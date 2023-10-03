import PropTypes from 'prop-types';

import styles from './macroCard.module.css';

import Calories from '../../assets/energie.svg';
import Protéines from '../../assets/chicken.svg';
import Glucides from '../../assets/apple.svg';
import Lipides from '../../assets/cheeseburger.svg';

const imageMap = {
  Calories: {
    src: Calories,
    alt: 'Icône de flamme',
    bgColor: 'rgba(255, 0, 0, 0.0661)',
    unit: 'kCal',
  },
  Protéines: {
    src: Protéines,
    alt: 'Icône de poulet',
    bgColor: 'rgba(74, 184, 255, 0.1)',
    unit: 'g',
  },
  Glucides: {
    src: Glucides,
    alt: 'Icône de pomme',
    bgColor: 'rgba(249, 206, 35, 0.1017)',
    unit: 'g',
  },
  Lipides: {
    src: Lipides,
    alt: 'Icône de cheeseburger',
    bgColor: 'rgba(253, 81, 129, 0.1)',
    unit: 'g',
  },
};

export function MacroCard({ title, count }) {
  const { src, alt, bgColor, unit } = imageMap[title];

  return (
    <div className={styles.macroCard}>
      <div className={styles.icone} style={{ backgroundColor: bgColor }}>
        <img src={src} alt={alt} />
      </div>
      <div className={styles.macroInfo}>
        <span className={styles.count}>
          {count}
          {unit}
        </span>
        <span className={styles.entitled}>{title}</span>
      </div>
    </div>
  );
}

MacroCard.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};
