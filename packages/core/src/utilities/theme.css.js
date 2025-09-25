import { _var } from '../utils.js';
import { colors } from '../names.js';

export default Object.values(colors).map(color => /*css*/`
.${color} {
  color: var(${_var(`color-${color}-text`)});
  background-color: var(${_var(`color-${color}`)});
}`);