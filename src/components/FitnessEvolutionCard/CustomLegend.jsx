import styles from './customLegend.module.css';

// CustomLegend component for displaying the legend in the chart
const CustomLegend = () => (
  <div className={styles.customLegend}>
    {/* Title of the legend */}
    <div>Activité quotidienne</div>

    {/* Wrapper for the legend units */}
    <div className={styles.unitWrapper}>
      {/* Legend for weight in kilograms */}
      <div className={styles.inlineBlock}>
        <span className={`${styles.circle} ${styles.backgroundGray}`}></span>
        <span className={styles.fontSize14}>Poids (kg)</span>
      </div>

      {/* Legend for calories burned */}
      <div className={styles.inlineBlock}>
        <span className={`${styles.circle} ${styles.backgroundRed}`}></span>
        <span className={styles.fontSize14}>Calories brûlées (kCal)</span>
      </div>
    </div>
  </div>
);

export default CustomLegend;
