/**
 * MacroCard component that displays macro-nutrient data.
 * @param {Object} props - The component's props.
 * @param {string} props.title - The title of the macro-nutrient.
 * @param {string} props.dataKey - The key to access the data from the data object.
 * @param {string} props.src - The source URL of the icon.
 * @param {string} props.alt - The alt text for the icon.
 * @param {string} props.bgColor - The background color for the icon.
 * @param {string} props.unit - The unit of the macro-nutrient.
 * @param {Object} props.data - The data object containing the macro-nutrient values.
 * @returns {JSX.Element} The rendered JSX element.
 */
import PropTypes from 'prop-types';

import styles from './macroCard.module.css';

export function MacroCard({ title, dataKey, src, alt, bgColor, unit, data }) {
  // Retrieve the count for the given macro-nutrient
  const count = data[dataKey];

  return (
    <div className={styles.macroCard}>
      {/* Icon section */}
      <div className={styles.icone} style={{ backgroundColor: bgColor }}>
        <img src={src} alt={alt} />
      </div>

      {/* Macro-nutrient information */}
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
