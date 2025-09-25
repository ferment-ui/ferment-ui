import { blockRule } from 'ttls-helpers';

const flexProperties = {
  0: 0,
  '10a': '1 0 auto',
}

export default Object.entries(flexProperties).map(([key, value]) => blockRule(`.f-${key}`, { 'flex': value })).join('\n\n');