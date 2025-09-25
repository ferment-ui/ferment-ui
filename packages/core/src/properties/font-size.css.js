import { blockRule } from 'ttls-helpers';
import { _var } from '../utils.js';

const properties = {
  'xs': '0.8em',
  'sm': '0.9em',
  'md': '1.0em',
  'lg': '1.2em',
  'xl': '1.5em',
}

export default /*css*/`${Object.entries(properties).map(([key]) => blockRule(`.fs-${key}`, { 'font-size': _var('fs') })).join('\n')}

.fs-copy-fluid {
  --fs: clamp(var(--fs-copy-min, 1rem), var(--fs-copy-preferred, 2.5vw + 1rem), var(--fs-copy-max, 2rem));
}

.fs-heading-fluid {
  --fs: clamp(var(--fs-heading-min, 1.5rem), var(--fs-heading-preferred, 3vw + 1.5rem), var(--fs-heading-max, 2.5rem));
}

.fs-subheading-fluid {
  --fs: clamp(var(--fs-subheading-min, 0.9em), var(--fs-subheading-preferred, 2.5vw + 1.2em), var(--fs-subheading-max, 2em));
}

[class^="fs-"],
[class*="fs-"],
[class^="fs-"] > *,
[class*="fs-"] > * {
  font-size: var(--fs);
}`;
