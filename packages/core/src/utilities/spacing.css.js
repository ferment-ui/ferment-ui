import { _var } from '../utils.js';

export default /*css*/`.gap {
  gap: var(${_var('spacing-gap')});
}

.s-dense {
  --spacing-scale: var(--spacing-scale-dense);
  --spacing-inline-scale: var(--spacing-inline-scale-dense);
}

.s-sparse {
  --spacing-scale: var(--spacing-scale-sparse);
  --spacing-inline-scale: var(--spacing-inline-scale-sparse);
}

/* need to recompute these when scale changes */
[class="s"],
[class^="s "], [class*=" s "],
[class^="s-"], [class*=" s-"] {
  --spacing-1: calc(var(--spacing-scale) * 0.125rem);
  --spacing-2: calc(var(--spacing-scale) * 0.25rem);
  --spacing-3: calc(var(--spacing-scale) * 0.5rem);
  --spacing-4: calc(var(--spacing-scale) * .75rem);
  --spacing-5: calc(var(--spacing-scale) * 1rem);
  --spacing-6: calc(var(--spacing-scale) * 1.5rem);
  --spacing-7: calc(var(--spacing-scale) * 2rem);
  --spacing-8: calc(var(--spacing-scale) * 2.5rem);
  --spacing-9: calc(var(--spacing-scale) * 3rem);
  --spacing-10: calc(var(--spacing-scale) * 4rem);

  --spacing-min: var(--spacing-1);
  --spacing-preferred: 5%;
  --spacing-max: var(--spacing-7);
  --spacing-fluid: clamp(var(--spacing-min), var(--spacing-preferred), var(--spacing-max));

  --spacing-inline-1: calc(var(--spacing-1) * var(--spacing-inline-scale));
  --spacing-inline-2: calc(var(--spacing-2) * var(--spacing-inline-scale));
  --spacing-inline-3: calc(var(--spacing-3) * var(--spacing-inline-scale));
  --spacing-inline-4: calc(var(--spacing-4) * var(--spacing-inline-scale));
  --spacing-inline-5: calc(var(--spacing-5) * var(--spacing-inline-scale));
  --spacing-inline-6: calc(var(--spacing-6) * var(--spacing-inline-scale));
  --spacing-inline-7: calc(var(--spacing-7) * var(--spacing-inline-scale));
  --spacing-inline-8: calc(var(--spacing-8) * var(--spacing-inline-scale));
  --spacing-inline-9: calc(var(--spacing-9) * var(--spacing-inline-scale));
  --spacing-inline-10: calc(var(--spacing-10) * var(--spacing-inline-scale));
}
`;