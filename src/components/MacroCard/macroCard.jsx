import PropTypes from 'prop-types';

import styles from './macroCard.module.css';

export function MacroCard({ title, dataKey, src, alt, bgColor, unit, data }) {
  const count = data[dataKey];

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
  dataKey: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};
