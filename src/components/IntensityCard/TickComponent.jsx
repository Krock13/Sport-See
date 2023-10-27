/**
 * TickComponent
 *
 * This component renders a custom tick for the radar chart's angle axis.
 * Depending on the index, the tick's position is adjusted to make sure the labels
 * do not overlap with the chart and are displayed clearly.
 *
 * @param {object} props - The component's props.
 * @returns {JSX.Element} Custom tick for the radar chart.
 */

// External dependencies
import PropTypes from 'prop-types';

const TickComponent = (props) => {
  const { x, y, payload, index, fontSize } = props;
  let offsetX = 0;
  let offsetY = 0;

  // Adjust tick position based on the given index
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

  // Render tick label with adjusted position
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

// Define PropTypes for type safety and better documentation
TickComponent.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }),
  index: PropTypes.number,
  fontSize: PropTypes.number,
};

export default TickComponent;
