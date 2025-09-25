import { blockRule } from 'ttls-helpers';

// TODO: convert to just 1 to 12, 1 to 6, etc. and use calc() for the rest
export const inlineSizes = {
  0: '0',
  '1-2': '50%',
  '1-3': '33.333%',
  '2-3': '66.666%',
  '1-4': '25%',
  '2-4': '50%',
  '3-4': '75%',
  '1-5': '20%',
  '2-5': '40%',
  '3-5': '60%',
  '4-5': '80%',
  '1-6': '16.666%',
  '2-6': '33.333%',
  '3-6': '50%',
  '4-6': '66.666%',
  '5-6': '83.333%',
  '1-12': '8.333%',
  '2-12': '16.666%',
  '3-12': '25%',
  '4-12': '33.333%',
  '5-12': '41.667%',
  '6-12': '50%',
  '7-12': '58.333%',
  '8-12': '66.666%',
  '9-12': '75%',
  '10-12': '83.333%',
  '11-12': '91.666%',
  100: '100%',
  auto: 'auto',
  'max-content': 'max-content',
  'min-content': 'min-content',
  'fit-content': 'fit-content',
};

export default Object.entries(inlineSizes).map(([key, value]) => blockRule(`.w-${key}, .isize-${key}`, { 'inline-size': value })).join('\n\n');