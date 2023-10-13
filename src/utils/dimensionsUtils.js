/**
 * dimensionsUtils.js
 *
 * This utility function calculates the dimensions and margins for a chart
 * based on the default dimensions and the user's screen size.
 *
 * @param {number} defaultWidth - The default width of the chart.
 * @param {number} defaultHeight - The default height of the chart.
 * @param {Object} defaultMargins - The default margins for the chart.
 * @returns {Object} The calculated dimensions and margins.
 */

export const calculateDimensions = (defaultWidth, defaultHeight, defaultMargins) => {
  // Initialize dimensions with default values
  let dimensions = {
    width: defaultWidth,
    height: defaultHeight,
    ...defaultMargins,
  };

  // Constants for reference screen dimensions
  const REF_WIDTH = 1440;
  const REF_HEIGHT = 1024;

  // Check if the user's screen dimensions differ from the reference dimensions
  if (window.screen.width !== REF_WIDTH || window.screen.height !== REF_HEIGHT) {
    // Calculate new dimensions based on the user's screen size
    dimensions.width = (window.screen.width / REF_WIDTH) * defaultWidth;
    dimensions.height = (window.screen.height / REF_HEIGHT) * defaultHeight;
    dimensions.marginTop = (window.screen.height / REF_HEIGHT) * defaultMargins.marginTop;
    dimensions.marginRight = (window.screen.width / REF_WIDTH) * defaultMargins.marginRight;
    dimensions.marginLeft = (window.screen.width / REF_WIDTH) * defaultMargins.marginLeft;
    dimensions.marginBottom = (window.screen.height / REF_HEIGHT) * defaultMargins.marginBottom;
  }

  return dimensions;
};
