import Calories from '../../assets/energie.svg';
import Protéines from '../../assets/chicken.svg';
import Glucides from '../../assets/apple.svg';
import Lipides from '../../assets/cheeseburger.svg';

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
    dataKey: 'protéinesCount',
    src: Protéines,
    alt: 'Icône de poulet',
    bgColor: 'rgba(74, 184, 255, 0.1)',
    unit: 'g',
  },
  {
    title: 'Glucides',
    dataKey: 'glucidesCount',
    src: Glucides,
    alt: 'Icône de pomme',
    bgColor: 'rgba(249, 206, 35, 0.1017)',
    unit: 'g',
  },
  {
    title: 'Lipides',
    dataKey: 'lipidesCount',
    src: Lipides,
    alt: 'Icône de cheeseburger',
    bgColor: 'rgba(253, 81, 129, 0.1)',
    unit: 'g',
  },
];
