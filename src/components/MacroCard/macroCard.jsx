import PropTypes from 'prop-types';

import styles from './macroCard.module.css';

import Calories from '../../assets/energie.svg';
import Protéines from '../../assets/chicken.svg';
import Glucides from '../../assets/apple.svg';
import Lipides from '../../assets/cheeseburger.svg';

const imageMap = {
  Calories: { src: Calories, alt: 'Icône de flamme', bgColor: 'rgba(255, 87, 51, 0.1)' },
  Protéines: { src: Protéines, alt: 'Icône de poulet', bgColor: 'rgba(74, 184, 255, 0.1)' },
  Glucides: { src: Glucides, alt: 'Icône de pomme', bgColor: 'rgba(51, 87, 255, 0.1)' },
  Lipides: { src: Lipides, alt: 'Icône de cheeseburger', bgColor: 'rgba(253, 81, 129, 0.1)' },
};

export function MacroCard({ title, count }) {
  const { src, alt, bgColor } = imageMap[title];

  return (
    <div className={styles.macroCard}>
      <div className={styles.icone} style={{ backgroundColor: bgColor }}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

MacroCard.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};
