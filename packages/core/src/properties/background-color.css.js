import { rules } from 'ttls-helpers';
import { colors } from '../names.js';

// based on the colors.css.js file
export default rules((value) => `.bc-${value}`, Object.values(colors), 'background-color');