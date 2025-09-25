
import { colors } from '../names.js';

export default Object.values(colors).map(color => /*css*/`
.c-${color} {
  color: var(--color-${color});
}
`).join('');