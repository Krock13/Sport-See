/**
 * Data for rendering macro cards.
 * @typedef {Object} MacroData
 * @property {string} title - The title of the macro card.
 * @property {string} dataKey - The key used to fetch data from the API.
 * @property {string} src - The source URL of the icon.
 * @property {string} alt - The alt text for the icon.
 * @property {string} bgColor - The background color for the icon.
 * @property {string} unit - The unit for the macro value.
 */

import Calories from '../../assets/energie.svg';
import Protéines from '../../assets/chicken.svg';
import Glucides from '../../assets/apple.svg';
import Lipides from '../../assets/cheeseburger.svg';

/** @type {MacroData[]} */
export const macroData = [
  {
    title: 'Calories',
    dataKey: 'calorieCount',
    src: Calories,
    alt: 'Icône de flamme',
    bgColor: 'rgba(255, 0, 0, 0.0661)',
    unit: 'kCal',
  },
  {
    title: 'Protéines',
    dataKey: 'proteinCount',
    src: Protéines,
    alt: 'Icône de poulet',
    bgColor: 'rgba(74, 184, 255, 0.1)',
    unit: 'g',
  },
  {
    title: 'Glucides',
    dataKey: 'carbohydrateCount',
    src: Glucides,
    alt: 'Icône de pomme',
    bgColor: 'rgba(249, 206, 35, 0.1017)',
    unit: 'g',
  },
  {
    title: 'Lipides',
    dataKey: 'lipidCount',
    src: Lipides,
    alt: 'Icône de cheeseburger',
    bgColor: 'rgba(253, 81, 129, 0.1)',
    unit: 'g',
  },
];
