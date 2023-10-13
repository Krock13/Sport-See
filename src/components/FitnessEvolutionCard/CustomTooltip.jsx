import PropTypes from 'prop-types';
import styles from './customTooltip.module.css';

// CustomTooltip component for displaying tooltips in the chart
const CustomTooltip = ({ active, payload }) => {
  // Default dimensions for the tooltip
  let width = '39px';
  let height = '63px';

  // Adjust dimensions based on the window size
  if (window.innerWidth !== 1440 || window.innerHeight !== 1024) {
    width = `${(39 * window.innerWidth) / 1440}px`;
    height = `${(63 * window.innerHeight) / 1024}px`;
  }

  // Render the tooltip if it's active and has payload data
  if (active && payload && payload.length) {
    return (
      <div style={{ width: width, height: height }} className={styles.tooltipContainer}>
        <div className={styles.flexCenter}>
          <p className={styles.textStyle}>{`${payload[0].value}Kg`}</p>
        </div>
        <div className={styles.flexCenter}>
          <p className={styles.textStyle}>{`${payload[1].value}Kcal`}</p>
        </div>
      </div>
    );
  }
  // Return null if the tooltip is not active or has no payload data
  return null;
};

// PropTypes for the CustomTooltip component
CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    })
  ),
};

export default CustomTooltip;
