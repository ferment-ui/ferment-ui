import { property } from 'ttls-helpers';

export const fontProperties = [
  ['s', 'font-size', '1rem'],
  ['ff', 'font-family', 'system-ui'],
  ['fs', 'font-style', 'normal'],
  ['fw', 'font-weight', 'normal'],
  ['lh', 'line-height', '1.5'],
  ['ls', 'letter-spacing', 'normal'],
  ['tt', 'text-transform', 'none'],
  ['td', 'text-decoration', 'none'],
  ['ta', 'text-align', 'start'],
  ['ts', 'text-shadow', 'none'],
  ['ti', 'text-indent', '0'],
  ['tj', 'text-justify', 'auto'],
  ['to', 'text-overflow', 'clip'],
  ['ws', 'white-space', 'normal'],
  ['wb', 'word-break', 'normal'],
  ['ww', 'word-wrap', 'normal'],
];  

export default /*css*/`${['body', 'heading', 'subheading'].map(font => fontProperties.map(([name, , value]) => property(`${name}-${font}`, value)).join('\n\n')).join('\n\n')}

:root {
  --copy-s-min: 1rem;
  --copy-s-preferred: 2.5vw;
  --copy-s-max: 1.5rem;
  --copy-s-fluid: clamp(var(--copy-s-min), var(--copy-s-preferred), var(--copy-s-max));

  --heading-s-min: 1em;
  --heading-s-preferred: 3vw;
  --heading-s-max: 2em;
  --heading-s-fluid: clamp(var(--heading-s-min), var(--heading-s-preferred), var(--heading-s-max));

  --subheading-s-min: 0.9em;
  --subheading-s-preferred: 2.5vw + 1.2em;
  --subheading-s-max: 2em;
  --subheading-s-fluid: clamp(var(--subheading-s-min), var(--subheading-s-preferred), var(--subheading-s-max));
}
`