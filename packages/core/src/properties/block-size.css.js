import { blockRule } from 'ttls-helpers';

const blockSizes = {
  0: '0',
  100: '100%',
  auto: 'auto',
};

export default Object.entries(blockSizes).map(([key, value]) => blockRule(`.h-${key}, .bsize-${key}`, { 'block-size': value })).join('\n\n');