
import { blockRule } from 'ttls-helpers';

export default /*css*/`
.bs {
  box-shadow: var(--bs);
}

.bs-none {
  --bs: none;
}

${[1, 2, 3, 4, 5, 6].map(i => blockRule(`.bs-${i}`, { 'box-shadow': `var(--shadow-${i})` })).join('\n')}`;