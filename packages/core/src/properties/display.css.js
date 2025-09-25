
import { rules } from 'ttls-helpers';

export default /*css*/`${rules((value) => `.d-${value}`, ['static', 'fixed', 'relative', 'absolute', 'flex', 'block', 'inline', 'inline-block', 'inline-flex', 'contents'], 'display')}

.d-grid {
  display: grid;
  --rows: auto;
  --columns: 1;
  grid-template-rows: repeat(var(--rows), minmax(0, 1fr));
  grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
  --gap: ;
  --row-gap: ;
  --column-gap: ;
  row-gap: var(--row-gap, var(--gap));
  column-gap: var(--column-gap, var(--gap));
}`;